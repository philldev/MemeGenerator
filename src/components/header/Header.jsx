import { Flex } from "@chakra-ui/core";
import React from "react";
import "./header.module.css";
import Search from "./Search";

export default function Header() {
  return (
    <header className='container'>
    <Flex direction='row' justifyContent='space-between'  alignItems='center'>
      <a href>Meme Generator</a>

      <Flex direction='row' alignItems='center'>
        <p>Search Memes</p>
        <Search />
      </Flex>
      
    </Flex >
    </header>
  );
}
