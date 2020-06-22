import React from "react";
import { Box, Link, Image } from "@chakra-ui/core";
import { Link as ReachLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

export const links = [
  {
    to: "/user",
    text: "My Memes",
  },
  {
    to: "/",
    text: "Login",
  },
  {
    to: "/",
    text: "About",
  },
];

export default function NavLinks() {
  return (
    <Box display="flex" flexWrap="wrap" as="nav" alignItems="center">
      {/* By Jonah Bethlehem, DE  */}
      <Link marginRight='1rem' href="/">
        <Image src={logo} height="35px" />
      </Link>
      {links.map((l, idx) => (
        <Link key={idx} to={l.to} as={ReachLink} marginRight="1rem">
          {l.text}
        </Link>
      ))}
    </Box>
  );
}
