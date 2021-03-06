import { Box, Flex } from "@chakra-ui/core";
import React from "react";

export default function Main({children}) {

  return (
    <Box
      as="main"
      className='container'
      paddingLeft="15px"
      paddingTop="2rem"

    >
      <Flex justifyContent="center">
        {children}
      </Flex>
    </Box>
  );
}
