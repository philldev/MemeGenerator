import React from "react";
import { Box, Avatar, Text, Image } from "@chakra-ui/core";
import stackLogo from "../../assets/jsreactnode.svg";
import photo from "../../assets/download.png";

export default function About() {
  return (
    <>
      <Box
        color="white"
        backgroundColor="blue.800"
        padding="2rem"
        as="main"
        maxW="425px"
        mx="auto"
        marginTop="80px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Avatar
          width="255px"
          height="255px"
          display="block"
          marginX="auto"
          name="Dan Abrahmov"
          src={photo}
          marginBottom="2rem"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        />
        <Text opacity='.8' as="em" fontSize="1.2rem">
          “Good webapp takes time, just like Wine”
        </Text>
        <Text opacity='.8' as="p" fontSize=".8rem" marginBottom="2rem">
          - Definitely not my quotes
        </Text>

        <Text opacity='.8' lineHeight=" 202.7%">
          This is a website where you can caption 100 top memes from imgflip.com
          where all good memes come from. I created this website just for my
          personal project which become a great learning path for me. I want to
          give a shoutout and big thanks for all people whose code that I used
          to make this project possible. the web layout is inspired by
          pexels.com.
        </Text>

        <Text opacity='.8' marginTop="1rem">Deddy Wolley</Text>
      </Box>
      <Image mx="auto" marginTop="1.5rem" src={stackLogo} />
    </>
  );
}
