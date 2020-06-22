import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
} from "@chakra-ui/core";
import { links } from "./NavLinks";
import SocialLinks from "./SocialLinks";
import { Link as ReachLink } from "react-router-dom";

export default function Hamburger() {
  return (
    <Menu>
      <MenuButton
        backgroundColor="#232A34"
        color="#000"
        position='absolute'
        right='0'
        marginRight='.5rem'
        padding="0"
        display={{ base: "block", md: "none" }}
        as={Button}
        _hover={{ backgroundColor: "transparent" }}
      >
        <svg
          width="30"
          height="21"
          viewBox="0 0 30 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="5" rx="2.5" fill="#D0D0D0" />
          <rect y="8" width="30" height="5" rx="2.5" fill="#D0D0D0" />
          <rect y="16" width="30" height="5" rx="2.5" fill="#D0D0D0" />
        </svg>
      </MenuButton>
      <MenuList maxW="10px" color="#000">
        {links.map((l, idx) => (
          <MenuItem key={idx}>
            <Link key={idx} to={l.to} as={ReachLink} marginRight="1rem">
              {l.text}
            </Link>
          </MenuItem>
        ))}

        <MenuItem>
          <SocialLinks />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
