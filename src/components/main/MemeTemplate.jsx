import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import ModalImage from "./ModalImage";
import ModalForm from "./ModalForm";
import { useContext } from "react";
import { MemeContext } from "../../context/memeContext";
import { useParams } from "react-router-dom";

export default function MemeTemplate() {
  const { memes, savedMemes, setSavedMemes } = useContext(MemeContext);
  let { id } = useParams();


  const selectedMeme =
    savedMemes.filter((m) => m._id === id)[0]
      ? savedMemes.filter((m) => m._id === id)[0]
      : memes.filter((m) => m.id === id)[0];

      // console.log(savedMemes.filter((m) => m._id === id)[0])

  const [postedMeme, setPostedMeme] = React.useState(null);

  const handleSaveMeme = () => {
    // https://gist.github.com/gordonbrander/2230317
    const _id = "_" + Math.random().toString(36).substr(2, 9);
    
    const name = selectedMeme.name;
    const url = postedMeme;

    const newSavedMeme = {
      _id,
      name,
      url,
      isSavedMeme: true,
    };

    setSavedMemes((s) => [...s, newSavedMeme]);
  };

  return (
    <Box marginTop="6rem" className="container">
      <Flex color="#fff">
        {selectedMeme && (
          <ModalImage
            selectedMeme={selectedMeme}
            postedMeme={postedMeme}
            handleSaveMeme={handleSaveMeme}
          />
        )}

        {selectedMeme && !selectedMeme.isSavedMeme && (
          <ModalForm
            selectedMeme={selectedMeme}
            setPostedMeme={setPostedMeme}
          />
        )}
      </Flex>
    </Box>
  );
}
