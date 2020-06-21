import { Box, Link, Image } from "@chakra-ui/core";
import React from "react";
import Search from "./Search";
import { Link as ReachLink } from "react-router-dom";
import github from "../../assets/github-image.svg";
import linkedIn from "../../assets/linkedin.svg";

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
      display='flex'
      justifyContent='center'
    >
      <Box
        width="975px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft='20px'
      >
        <Box display="flex" as="nav">
          <Link to="/" as={ReachLink} marginRight="1rem">
            {" "}
            MemeGen{" "}
          </Link>
          <Link marginRight="2rem"> About </Link>
          <a href="https://github.com/philldev" target="_blank">
            <Image marginRight="1rem" height="18px" src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/deddy-wolley-b09ab312a/"
            target="_blank"
          >
            <Image marginRight="2rem" height="18px" src={linkedIn} />
          </a>
        </Box>

        <Box display="flex" as="nav" alignItems="center">
          <Search />
          <Link to="/user" as={ReachLink} marginRight="1rem">
            My Memes
          </Link>
          <Link marginRight="1rem">Login</Link>
        </Box>
      </Box>
    </Box>
  );
}
