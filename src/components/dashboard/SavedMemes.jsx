import React, { useContext } from "react";
import { Box } from "@chakra-ui/core";
import MemeColumn from "../main/MemeColumn";
import { MemeContext } from "../../context/memeContext";
import spliceMemes from "../../utils/spliceMemes";

export default function SavedMemes() {
  const { savedMemes } = useContext(MemeContext);
  const chunkMemes = spliceMemes(savedMemes, 3);
  
  return (
    <Box marginX='auto' width="100%" display="flex" paddingLeft='20px'>
      {chunkMemes && chunkMemes.length > 0
        ? chunkMemes.map((cm, idx) => (
            <MemeColumn idx={idx} key={idx} memes={cm} />
          ))
        : null}
    </Box>
  );
}
