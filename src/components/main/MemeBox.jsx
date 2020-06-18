import { Flex, Image, Text } from "@chakra-ui/core";
import React, { useContext, useRef } from "react";
import { MemeContext } from "../../context/memeContext";
import useOnScreen from "../../utils/useOnScreen";

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
      position="relative"
      direction="column"
      maxW="500px"
      marginX="auto"
      minH="120px"
      onClick={handleClick}
      transition='all .2s ease-out'
      
    >
      <Text className='meme_title' position='absolute' left='10px' display='none' bottom='20px' marginX='auto'>{meme.name}</Text>
      <Image
        className={visible ? "fade_in meme_box" : null}
        opacity={loading ? 1 : 0}
        ref={setRef}
        width="100%"
        marginBottom="20px"
        onLoad={handleOnload}
        src={visible ? meme.url : ""}
        alt={meme.name}
        boxShadow='5px 5px #1A202C'
      />
    </Flex>
  );
}
