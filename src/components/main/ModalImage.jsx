import React from "react";
import { Image, Heading, Box, Spinner } from "@chakra-ui/core";

export default function ModalImage({ selectedMeme, postedMeme, loading }) {
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
      <Heading marginBottom="1rem"> {selectedMeme.name} </Heading>
      {loading ? (
        <Spinner marginTop='110px' />
      ) : (
        <Image
          className="meme"
          maxH="40vh"
          marginX="auto"
          src={postedMeme ? postedMeme : selectedMeme.url}
          alt={selectedMeme.name}
        />
      )}
    </Box>
  );
}
