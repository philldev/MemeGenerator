import React from "react";
import { Text, Box, Avatar, Heading } from "@chakra-ui/core";
import photo from "../../assets/download.png";

export default function UserProfile() {
  return (
    <Box
    backgroundColor='blue.900'
    boxShadow="5px 5px #1A202C"
      width="100%"
      padding="2rem 1rem"
      alignSelf="flex-start"
      marginBottom="2rem"
      marginTop="2rem"
      display="flex"
      mx="auto"
    >
      <Box width="25%">
        <Avatar
          display="block"
          size="2xl"
          mx='auto'
          name="Segun Adebayo"
          src={photo}
        />
      </Box>

      <Box color="#fff">
        <Box>
          <Heading> Phillip 1997 </Heading>
        </Box>
        <Box>
          <Text> <strong>9</strong>  Memes</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi
            et atque incidunt. Laborum quo rem minus incidunt eius quod!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
