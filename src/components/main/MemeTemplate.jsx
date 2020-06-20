import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import ModalImage from "./ModalImage";
import ModalForm from "./ModalForm";
import { useContext } from "react";
import { MemeContext } from "../../context/memeContext";
import { useParams } from "react-router-dom";

export default function MemeTemplate() {
  const {memes} =useContext(MemeContext)
  let { id } = useParams();
  const selectedMeme =  memes.filter((m) => m.id === id)[0] ;

  console.log('rendering from memetemplate')
  
  return (
    <Box padding="132px 150px">
      <Flex color="#fff">
        {selectedMeme && <ModalImage  selectedMeme={selectedMeme}/>}
        {selectedMeme && <ModalForm  selectedMeme={selectedMeme}/>}
      </Flex>
    </Box>
  );
}
