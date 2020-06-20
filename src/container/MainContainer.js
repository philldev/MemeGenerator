import { Box, Flex } from "@chakra-ui/core";
import React from "react";

export default function Main({children}) {

  return (
    <Box
      as="main"
      maxW="1400px"
      marginX="auto"
      paddingLeft="15px"
      bg="gray.700"
      paddingTop="2rem"
    >
      <Flex justifyContent="center">
        {children}
      </Flex>
    </Box>
  );
}
