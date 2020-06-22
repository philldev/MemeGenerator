import React from "react";
import { Image } from "@chakra-ui/core";
import github from "../../assets/github-image.svg";
import linkedIn from "../../assets/linkedin.svg";

const links = [
  {
    href: "https://github.com/philldev",
    src: github,
  },
  {
    href: "https://github.com/philldev",
    src: linkedIn,
  },
];

export default function SocialLinks() {
  return (
    <>
      {links.map((l, idx) => (
        <a key={idx} href={l.href}>
          <Image key={idx} marginRight="1rem" height="18px" src={l.src} />
        </a>
      ))}
    </>
  );
}
