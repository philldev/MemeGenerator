import React from "react";
import { Image, Box } from "@chakra-ui/core";



export default function SocialLinks({links}) {
  return (
    <Box display='flex'>
      {links && links.map((l, idx) => (
        <a key={idx} href={l.href}>
          <Image key={idx} marginRight="1rem" height="18px" src={l.src} />
        </a>
      ))}
    </Box>
  );
}
