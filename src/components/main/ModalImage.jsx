import { Box, Heading, Image, Link, Button } from "@chakra-ui/core";
import React from "react";
import FavouriteButton from "./FavouriteButton";

export default function ModalImage({ selectedMeme, postedMeme, handleSaveMeme, saved }) {
  return (
    <Box
      padding="2rem 1rem"
      textAlign="center"
      flexBasis="0"
      flexGrow="2"
      flexShrink="2"
      backgroundColor="#1E4E8C"
      boxShadow="5px 5px #1A202C"
      marginX="1rem"
    >
      <Heading marginBottom="1rem">{selectedMeme.name}</Heading>
      <Image
        className="meme"
        maxH="70vh"
        marginX="auto"
        src={postedMeme ? postedMeme : selectedMeme.url}
        alt={selectedMeme.name}
      />
      {postedMeme ? (
        <>
          {" "}
          <Link download href={postedMeme} > Download Meme </Link>
          <FavouriteButton handleSaveMeme={handleSaveMeme} saved={saved}/>
          {" "}
        </>
      ) : null}
    </Box>
  );
}
