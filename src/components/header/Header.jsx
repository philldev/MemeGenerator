import { Box, Button, Heading, Text } from "@chakra-ui/core";
import React from "react";
import "./header.module.css";

export default function Header() {
  return (
    <Box marginTop='66px' display='flex' justifyContent='space-between' alignItems='center' flexDir='column' maxH="500px" minH="350px" as="header" className="container">
      <Box marginTop='50px' textAlign='center'>
        <Heading fontSize="48px" marginBottom='2rem'>Make memes, make world peace </Heading>

        
        <Button bg='blue.700' _hover={{bg:'blue.800'}} padding="10px 14px">
          Random meme template
        </Button>
      </Box>

      <Text color='#ACACAC' >powered by imgflip.com</Text>
    </Box>
  );
}
