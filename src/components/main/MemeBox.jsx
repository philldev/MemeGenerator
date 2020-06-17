import { Flex, Image } from "@chakra-ui/core";
import React from "react";
import  './main.module.css'
import useOnScreen from "../../utils/useOnScreen";
import useColumnRef from "../../utils/useColumnRef";


export default function MemeBox({meme}) {

  const [setRef, visible] = useOnScreen({rootMargin: '-120px'})

  const [loading, setLoading] = React.useState(false)

  const [ref] = useColumnRef()

  const handleOnload = () => {
    setLoading(true)
  }

  const handleClick = e => {
    console.log(e.target.parentNode.parentNode.previousSibling.previousSibling)
  }

  /* TODO
    1. Make lazy load images COMPLETED
  */
  
  return (
    <Flex   direction="column" maxW='500px' marginX='auto' minH='120px' onClick={handleClick}>
      <Image className={visible ? 'fade_in' : null} opacity={loading ? 1 : 0}   ref={setRef}  width='100%' marginBottom='20px' onLoad={handleOnload} src={visible ? meme.url : ''} alt={meme.name} />
    </Flex>
  );
}
