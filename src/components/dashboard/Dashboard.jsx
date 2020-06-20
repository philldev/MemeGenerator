import { Box, Heading } from "@chakra-ui/core";
import React from "react";
import UserProfile from "./UserProfile";
import SavedMemes from "./SavedMemes";

export default function Dashboard() {
  

  return (
    <Box as="main" maxW='1400px' mx='auto' marginTop='66px'>
      <Heading color='white' marginTop='6rem' marginBottom='2rem'>User Dashboard</Heading>
      <Box display="flex">
        {/* User profile */}
        <UserProfile/>
        {/* Memes Collection */}
        <SavedMemes/>
      </Box>
    </Box>
  );
}
