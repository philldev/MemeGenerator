import { Box } from "@chakra-ui/core";
import React, { useRef, useState } from "react";
import MemeBox from "./MemeBox";
import useColumnRef from "../../utils/useColumnRef";


export default function MemeColumn({ memes, idx }) {

  const [setRef] = useColumnRef()



  return (
    <Box ref={setRef} flexBasis={0} flexGrow={1} flexShrink={1} marginRight="20px" justifyContent='center'>
      {memes && memes.length > 0 ? memes.map((meme)=> <MemeBox key={meme.id} meme={meme} />) : null}
    </Box>
  );
}
