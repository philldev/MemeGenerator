import { Flex } from "@chakra-ui/core";
import React, { useContext, useEffect } from "react";
import MemeColumn from "./MemeColumn";
import { MemeContext } from "../../context/memeContext";
import spliceMemes from "../../utils/spliceMemes";
import  './main.module.css'

export default function Main() {
  const { memes } = useContext(MemeContext);

  const chunkMemes = spliceMemes(memes);

  return (
    <main>
      <Flex justifyContent='center'>
        {chunkMemes && chunkMemes.length > 0
          ? chunkMemes.map((cm, idx, arr) => <MemeColumn chunks={arr.length}  key={idx} memes={cm} />)
          : null}
      </Flex>
    </main>
  );
}
