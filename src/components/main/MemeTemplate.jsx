import React from "react";
import { Flex, Box, Button, Link } from "@chakra-ui/core";
import ModalImage from "./ModalImage";
import ModalForm from "./ModalForm";
import { useContext } from "react";
import { MemeContext } from "../../context/memeContext";
import { Link as ReachLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MemeTemplate() {
  const { memes, savedMemes, setSavedMemes } = useContext(MemeContext);
  let { id } = useParams();

  const selectedMeme = savedMemes.filter((m) => m._id === id)[0]
    ? savedMemes.filter((m) => m._id === id)[0]
    : memes.filter((m) => m.id === id)[0];

  const [postedMeme, setPostedMeme] = React.useState(null);

  const [saved, setSaved] = React.useState(null);

  const handleSaveMeme = () => {
    // got from :
    // https://gist.github.com/gordonbrander/2230317
    const _id = "_" + Math.random().toString(36).substr(2, 9);
    const name = selectedMeme.name;
    const url = postedMeme;

    setSaved(true);

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
      <Flex color="#fff" flexDirection={{ base: "column", md: "row" }}>
      <Link as={ReachLink} to="/user">
        {" "}
        <Button
          color="#fff"
          bg="transparent"
          _hover={{ bg: "blue.600" }}
          display="block"
          position="absolute"
          bottom="10px"
          right="15px"
        >
          go back
        </Button>{" "}
      </Link>
        {selectedMeme && (
          <ModalImage
            selectedMeme={selectedMeme}
            postedMeme={postedMeme}
            handleSaveMeme={handleSaveMeme}
            saved={saved}
          />
        )}

        {selectedMeme && !selectedMeme.isSavedMeme && (
          <ModalForm
            selectedMeme={selectedMeme}
            setPostedMeme={setPostedMeme}
            setSaved={setSaved}
          />
        )}
      </Flex>
    </Box>
  );
}
