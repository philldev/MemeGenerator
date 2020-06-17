import { Flex, Image } from "@chakra-ui/core";
import React, { useContext } from "react";
import { MemeContext } from "../../context/memeContext";
import useOnScreen from "../../utils/useOnScreen";
import "./main.module.css";

export default function MemeBox({ meme }) {
  const [setRef, visible] = useOnScreen({ rootMargin: "-120px" });

  const [loading, setLoading] = React.useState(false);

  const { setSelectedMeme, setIsOpen } = useContext(MemeContext);

  const handleOnload = () => {
    setLoading(true);
  };

  const handleClick = () => {
    setSelectedMeme(meme);
    setIsOpen(true);
  };

  return (
    <Flex
      direction="column"
      maxW="500px"
      marginX="auto"
      minH="120px"
      onClick={handleClick}
    >
      <Image
        className={visible ? "fade_in" : null}
        opacity={loading ? 1 : 0}
        ref={setRef}
        width="100%"
        marginBottom="20px"
        onLoad={handleOnload}
        src={visible ? meme.url : ""}
        alt={meme.name}
      />
    </Flex>
  );
}
