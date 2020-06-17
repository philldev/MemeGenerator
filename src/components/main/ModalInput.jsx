import React, { useContext } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/core";
import { MemeContext } from "../../context/memeContext";

export default function ModalInput ({idx}) {
  const {text, setText} = useContext(MemeContext)

  const handleText = e => {
    setText({...text, [e.target.name] : e.target.value})
  }

  return (
    <FormControl textAlign='left' marginTop='20px'>
      <FormLabel htmlFor="text">Text{`${idx + 1}`}</FormLabel>
      <Input onChange={handleText} name={`text${idx}`} type="text" id="text" />
    </FormControl>
  );
}
