import React from "react";
import { Text, Box } from "@chakra-ui/core";

export default function UserProfile() {
  
  return (
    <Box
      width="25%"
      bg="gray.600"
      padding="2rem 1rem"
      alignSelf="flex-start"
      marginRight="20px"
    >
      <Box>
        <Text>username :</Text>
        <Text>user</Text>
      </Box>
      <Box>
        <Text>email :</Text>
        <Text>user@user.com</Text>
      </Box>
    </Box>
  );
}
