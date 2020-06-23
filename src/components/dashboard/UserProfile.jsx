import { Avatar, Box, Editable, EditableInput, EditablePreview, Text } from "@chakra-ui/core";
import React from "react";
import photo from "../../assets/download.png";
import SocialLinks from "../header/SocialLinks";

const socialLinks = [
  {
    href: "https://www.facebook.com",
    src: "https://image.flaticon.com/icons/svg/1051/1051309.svg",
  },
  {
    href: "https://www.twitter.com",
    src: "https://image.flaticon.com/icons/svg/1051/1051331.svg",
  },
  {
    href: "https://www.instagram.com",
    src: "https://image.flaticon.com/icons/svg/1051/1051313.svg",
  },
];

export default function UserProfile() {
  return (
    <Box
      backgroundColor="#232A34"
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
          mx="auto"
          name="Segun Adebayo"
          src={photo}
        />
      </Box>

      <Box color="#fff">
        <Editable fontSize='2xl' mb="1rem"  defaultValue="Phillip">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Text >
          {" "}
          Bio : <br />
        </Text>
        <Editable mb="1rem" fontSize='md' defaultValue="
          Meme can end world conflict">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Text mb='.5rem' >
          {" "}
          Social : <br />
        </Text>
        <SocialLinks links={socialLinks} />
      </Box>
    </Box>
  );
}
