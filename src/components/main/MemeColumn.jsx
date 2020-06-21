import { Box } from "@chakra-ui/core";
import React from "react";
import MemeBox from "./MemeBox";

export default function MemeColumn({ memes, idx }) {
  return (
    <Box
    
      flexBasis={0}
      flexGrow={1}
      flexShrink={1}
      marginRight="20px"
      justifyContent="center"
    >
      {memes && memes.length > 0
        ? memes.map((meme) => <MemeBox key={meme.id ? meme.id : meme._id} meme={meme} />)
        : null}
    </Box>
  );
}
