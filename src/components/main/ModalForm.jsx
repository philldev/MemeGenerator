import { Box, Button, Heading, Link } from "@chakra-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ModalInput from "./ModalInput";
import { Link as ReachLink } from "react-router-dom";
import postMemes from "../../utils/postMemes";

export default function ModalForm({ selectedMeme, setPostedMeme }) {
  const { register, handleSubmit, errors } = useForm();
  const boxesArr = new Array(selectedMeme.box_count).fill(0);

  const onSubmit = (values, e) => {
    const valuesKeys = Object.keys(values);

    if (valuesKeys.length === selectedMeme.box_count) {
      // setLoading(true)
      e.target.reset();
      console.log("success");
      postMemes(selectedMeme, values, setPostedMeme);
    } else {
      e.target.reset();
      console.log("error");
      // setError('Somethings wrong with the text')
    }
  };


  return (
    <Box
      padding="2rem 1rem"
      flexBasis="0"
      flexGrow="1"
      flexShrink="1"
      backgroundColor="#1E4E8C"
      boxShadow="5px 5px #1A202C"
      textAlign="center"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading marginBottom="1rem"> Caption Meme </Heading>
      {boxesArr.map((_, idx) => (
        <ModalInput errors={errors} register={register} key={idx} idx={idx} />
      ))}

      <Button
        bg="blue.500"
        _hover={{ bg: "blue.600" }}
        display="inline-block"
        marginTop="20px"
        type="submit"
        float='left'
      >
        Submit
      </Button>

      <Link as={ReachLink} to="/">
        {" "}
        <Button
          color="#fff"
          bg="transparent"
          _hover={{ bg: "blue.600" }}
          display="inline-block"
          marginTop="20px"
          float='right'
        >
          go back
        </Button>{" "}
      </Link>
    </Box>
  );
}
