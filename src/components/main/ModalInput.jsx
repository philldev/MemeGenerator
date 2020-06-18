import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/core";
import React from "react";

export default function ModalInput({ idx, register }) {
  
  React.useEffect(() => {
    
  })

  return (
    <FormControl textAlign="left" marginTop="20px">
      <FormLabel htmlFor={`text${idx}`}>Text{`${idx + 1}`}</FormLabel>
      <Input
        ref={register}
        color="gray.700"
        name={`text${idx}`}
        type="text"
        id={`text${idx}`}
        maxLength='40'
        isRequired={true}
      />
      <FormHelperText textAlign='right'>
        max characters : 40
      </FormHelperText>
      
    </FormControl>
  );
}
