import { Box } from "@chakra-ui/core";
import React from "react";
import UserProfile from "./UserProfile";
import SavedMemes from "./SavedMemes";

export default function Dashboard() {
  

  return (
    <Box as="main" maxW='975px' mx='auto' marginTop='66px'>
      <Box display="flex" flexDir='column'>
        
        <UserProfile/>
        
        <SavedMemes/>
      </Box>
    </Box>
  );
}
