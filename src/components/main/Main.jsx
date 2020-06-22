import { Spinner } from "@chakra-ui/core";
import React, { useContext, useMemo } from "react";
import { Route } from "react-router-dom";
import MainContainer from "../../container/MainContainer";
import { MemeContext } from "../../context/memeContext";
import spliceMemes from "../../utils/spliceMemes";
import useResponsiveColumn from "../../utils/useResponsiveColumn";
import ColumnContainer from "./ColumnContainer";
import MemeTemplate from "./MemeTemplate";
import useLoading from "../../utils/useLoading";

export default function Main() {
  
  const { search, memes } = useContext(MemeContext);

  const loading = useLoading(memes);

  
  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  
  const chunksLength = useResponsiveColumn();

  
  const chunkMemes = useMemo(() => spliceMemes(filteredMemes, chunksLength), [
    chunksLength,
    filteredMemes,
  ]);

  if (loading) return <Spinner />;

  return (
    <MainContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Route
            exact
            path="/"
            render={(props) => (
             chunkMemes ? <ColumnContainer {...props} chunkMemes={chunkMemes} /> : null
            )}
          />
            
          <Route exact path="/meme/:id" render={() => <MemeTemplate />} />
        </>
      )}
    </MainContainer>
  );
}
