import { Flex, Image } from "@chakra-ui/core";
import React, { useRef } from "react";

export default function MemeBox({meme}) {

  const boxRef = useRef()

  /* TODO
    1. Make lazy load images
  */
  
  return (
    <Flex  direction="column" maxW='500px' marginX='auto'>
      <Image ref={boxRef}  width='100%' marginBottom='20px' src={meme.url} alt={meme.name} />
    </Flex>
  );
}
