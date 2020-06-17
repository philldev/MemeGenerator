import { Button, Flex, ModalOverlay } from "@chakra-ui/core";
import React, { useContext } from "react";
import { MemeContext } from "../../context/memeContext";
import postMemes from "../../utils/postMemes";
import useClickOutside from "../../utils/useClickOutside";
import ModalInput from "./ModalInput";

export default function MemeModal() {
  const { setIsOpen, selectedMeme, text, postedMeme, setPostedMeme } = useContext(MemeContext);
  
  const boxesArr = new Array(selectedMeme.box_count).fill(0);
  
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  const elementRef = useClickOutside(handleClickOutside);

  const handleSubmit = (e) => {
    e.preventDefault()
    postMemes(selectedMeme,text, setPostedMeme )

  }

  return (
    <>
      <ModalOverlay />
      <div ref={elementRef} className="edit_meme">
        <Flex direction="column" maxH="400px">
          <img
            className="meme"
            src={postedMeme ?postedMeme : selectedMeme.url}
            alt={selectedMeme.name}
          />
          <form onSubmit={handleSubmit} className='meme_template'>
            {boxesArr.map((_, idx) => (
              <ModalInput key={idx} idx={idx} />
            ))}

            <Button display='inline-block' marginTop='20px' type="submit">Submit</Button>
          </form>
        </Flex>
      </div>
    </>
  );
}
