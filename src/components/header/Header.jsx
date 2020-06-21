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
      as="header"
    >
      <Box marginTop="50px" textAlign="center">
        <Heading fontSize="48px" marginBottom="2rem">
          Make memes, make world peace{" "}
        </Heading>
      </Box>
      <RandomButton />
      <Text color="#ACACAC">powered by imgflip.com</Text>
    </Box>
  );
}
