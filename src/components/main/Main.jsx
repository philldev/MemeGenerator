import { Flex, Box } from "@chakra-ui/core";
import React, { useContext, useMemo } from "react";
import { MemeContext } from "../../context/memeContext";
import spliceMemes from "../../utils/spliceMemes";
import useResponsiveColumn from "../../utils/useResponsiveColumn";
import MemeColumn from "./MemeColumn";

export default function Main() {
  const { memes, isOpen } = useContext(MemeContext);
  const chunksLength = useResponsiveColumn()
  const chunkMemes =useMemo(() => spliceMemes(memes, chunksLength), [chunksLength, memes])


  // if the is selected meme is open do not render
  if (isOpen) return null

  return (
    <Box as='main' maxW='1400px' marginX='auto' paddingLeft='15px' bg='gray.700' paddingTop='2rem'>
       <Flex justifyContent="center">
        {chunkMemes && chunkMemes.length > 0
          ? chunkMemes.map((cm, idx) => (
              <MemeColumn idx={idx} key={idx} memes={cm} />
            ))
          : null}
      </Flex>
      
    </Box>
  );
}
