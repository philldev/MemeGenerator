import { Box, Image, Link } from "@chakra-ui/core";
import React from "react";
import logo from "../../assets/logo.svg";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import Search from "./Search";
import SocialLinks from "./SocialLinks";

import github from "../../assets/github-image.svg";
import linkedIn from "../../assets/linkedin.svg";

const socialLinks = [
  {
    href: "https://github.com/philldev",
    src: github,
  },
  {
    href: "https://github.com/philldev",
    src: linkedIn,
  },
];


export default function Nav() {
 
  
  
  return (
    <Box
      pos="fixed"
      top="0"
      zIndex="20"
      color="#fff"
      background="#232A34"
      width="100%"
      height="66px"
      display="flex"
      justifyContent={{ base: "space-between", md: "center" }}
      alignItems={{ base: "center", md: "" }}
      minW='320px'
    >
      <Box
        width="975px"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="20px"
      >
        <NavLinks />
        <Box display="flex" as="nav" alignItems="center">
          <Search />
          <SocialLinks links={socialLinks} />
        </Box>
      </Box>
      <Link
        display={{ base: "block", md: "none" }}
        marginLeft="1rem"
        href="/"
      >
        <Image src={logo} height="35px" />
      </Link>
      <Box display={{ base: "block", md: "none" }}>
        <Search />
      </Box>
      <Hamburger />
    </Box>
  );
}
