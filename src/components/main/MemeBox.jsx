import { Flex, Image, Text, Link } from "@chakra-ui/core";
import React from "react";
import useOnScreen from "../../utils/useOnScreen";
import { Link as ReachLink } from "react-router-dom";
export default function MemeBox({ meme }) {
  const [setRef, visible] = useOnScreen({ rootMargin: "-120px" });

  const [loading, setLoading] = React.useState(true);

  const handleOnload = (e) => {
    setLoading(false);
  };

  return (
    <Link
      to={meme.isSavedMeme ? `meme/${meme._id}` : `meme/${meme.id}`}
      as={ReachLink}
    >
      <Flex
        position="relative"
        direction="column"
        maxW="500px"
        marginX="auto"
        minH="120px"
        transition="all .2s ease-out"
        className="meme_box"
        marginBottom="20px"
      >
        <Image
          className={visible ? "fade_in " : null}
          opacity={loading ? 0 : 1}
          ref={setRef}
          width="100%"
          onLoad={handleOnload}
          src={visible ? meme.url : ""}
          alt={meme.name}
          boxShadow="5px 5px #1A202C"
        />
        <Text
          className="meme_title"
          position="absolute"
          left="10px"
          bottom="10px"
          fontWeight="bold"
          marginX="auto"
          fontFamily="Ubuntu"
        >
          {meme.name}
        </Text>
      </Flex>
    </Link>
  );
}
