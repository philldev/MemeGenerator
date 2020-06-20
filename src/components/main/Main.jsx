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
  // get all memes from context provider
  const { search, memes } = useContext(MemeContext);

  const loading = useLoading(memes);

  // filter memes base on search input
  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  // compute chunk lenght for column
  const chunksLength = useResponsiveColumn();

  // slice memes into chunks base on display size
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
