import { Flex } from "@chakra-ui/core";
import React, { useContext } from "react";
import { MemeContext } from "../../context/memeContext";
import spliceMemes from "../../utils/spliceMemes";
import './main.module.css';
import MemeColumn from "./MemeColumn";

export default function Main() {
  const { memes } = useContext(MemeContext);
  const chunkMemes = spliceMemes(memes);




  return (
    <main>
      <Flex justifyContent='center'>
        {chunkMemes && chunkMemes.length > 0
          ? chunkMemes.map((cm, idx, arr) => <MemeColumn idx={idx}  key={idx} memes={cm} />)
          : null}
      </Flex>
    </main>
  );
}
