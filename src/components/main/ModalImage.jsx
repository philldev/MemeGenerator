import React, { useContext } from "react";
import { Image, Heading, Box, Spinner, Button, IconButton, Icon } from "@chakra-ui/core";
import { MemeContext } from "../../context/memeContext";
import { useRef } from "react";

export default function ModalImage({ loading }) {
  const { setSavedMemes, selectedMeme, postedMeme } = useContext(MemeContext);

  const iconRef= useRef()

  const handleClick = () => {
    console.log(postedMeme);
    iconRef.current.classList.add('slide_right')
    iconRef.current.style.opacity = 1
    iconRef.current.style.color = '#F6E05E'

    // const meme = {
    //   id: "id" + Math.random().toString(16).slice(2),
    //   templateId: selectedMeme.id,
    //   name: selectedMeme.name,
    //   url: postedMeme,
    // };

    // setSavedMemes((m) => [...m, meme]);
  };

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
        <Spinner marginTop="110px" />
      ) : (
        <Image
          className="meme"
          maxH="40vh"
          marginX="auto"
          src={postedMeme ? postedMeme : selectedMeme.url}
          alt={selectedMeme.name}
        />
      )}
      {!postedMeme && (
        <Button
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          display="inline-block"
          marginTop="20px"
          type="submit"
          onClick={handleClick}
        >
          Save to favorites
          <Icon ref={iconRef} opacity='0' marginLeft='5px'size='14px' verticalAlign='middle' name="star"/>
        </Button>
      )}
     
    </Box>
  );
}
