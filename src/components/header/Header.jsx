import { Box, Heading, Text } from "@chakra-ui/core";
import React from "react";
import "./header.module.css";
import RandomButton from "./RandomButton";

export default function Header() {
  return (
    <Box
      marginTop="66px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      maxH="500px"
      minH="350px"
      padding={{base: '10px 35px', md : '15px 100px',}} 
      as="header"
    >
      <Box marginTop="50px" textAlign="center">
        <Heading fontSize={{base: '2xl', md:'3xl'}} marginBottom="1rem">
          Make memes, make world peace{" "}
        </Heading>
        <Text> Pick a template and make a meme!! </Text>
      </Box>
      <RandomButton />
      <Text color="#ACACAC">powered by imgflip.com</Text>
    </Box>
  );
}
