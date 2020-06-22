import { Box, Heading, Image, Link } from "@chakra-ui/core";
import React from "react";
import FavouriteButton from "./FavouriteButton";

export default function ModalImage({ selectedMeme, postedMeme, handleSaveMeme, saved }) {
  return (
    <Box
      padding="2rem 1rem"
      textAlign="center"
      flexBasis="0"
      flexGrow={{base:'1',md:"2"}}
      flexShrink={{base:'1',md:"2"}}
      backgroundColor="#1E4E8C"
      boxShadow="5px 5px #1A202C"
      marginX="1rem"
      paddingBottom='70px'
      position='relative'
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
        <Box position='absolute' bottom='10px'>
          {" "}
          <FavouriteButton handleSaveMeme={handleSaveMeme} saved={saved}/>
          <Link marginLeft='25px' download href={postedMeme} > Download Meme </Link>
          {" "}
        </Box>
      ) : null}
    </Box>
  );
}
