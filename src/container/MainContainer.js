import { Box, Flex, Heading } from "@chakra-ui/core";
import React from "react";

export default function Main({ children }) {
  return (
    <>
      <Heading
        className="container"
        textAlign='center'
        paddingLeft="15px"
        paddingTop="2rem"
        maxW="975px"
        fontFamily="ubuntu"
        color="#fff"
      >
        TOP 100 MEMES
      </Heading>
      <Box
        as="main"
        className="container"
        paddingLeft="15px"
        paddingTop="2rem"
        maxW="975px"
      >
        <Flex justifyContent="center">{children}</Flex>
      </Box>
    </>
  );
}
