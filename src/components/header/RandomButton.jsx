import React, { useContext } from "react";
import { Button, Link } from "@chakra-ui/core";
import { MemeContext } from "../../context/memeContext";
import { Link as ReachLink } from "react-router-dom";

export default function RandomButton() {
  const { memes } = useContext(MemeContext);

 
    const randomMeme = memes[Math.floor(Math.random() * 100 + 1)] || {};

  console.log(randomMeme);
  return (
    <Link to={`meme/${randomMeme.id}`} as={ReachLink}>
      <Button bg="blue.700" _hover={{ bg: "blue.800" }} padding="10px 14px">
        Random meme template
      </Button>
    </Link>
  );
}
