import { Box, Button, Heading, Link, Spinner } from "@chakra-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ModalInput from "./ModalInput";
import { Link as ReachLink } from "react-router-dom";
import postMemes from "../../utils/postMemes";
import { useContext } from "react";
import { MemeContext } from "../../context/memeContext";

export default function ModalForm({ selectedMeme, setPostedMeme }) {
  const {setError} = useContext(MemeContext);
  const { register, handleSubmit, errors } = useForm();
  const boxesArr = new Array(selectedMeme.box_count).fill(0);

  const [loading, setLoading] = React.useState(false);

  const onSubmit = (values, e) => {
    const valuesKeys = Object.keys(values);
    setLoading(true);
    if (valuesKeys.length === selectedMeme.box_count) {
      // setLoading(true)
      e.target.reset();
      postMemes(selectedMeme, values, setPostedMeme, setLoading, setError);
    } else {
      e.target.reset();
      setLoading(false);
      setError('Invalid input!');
    }
  };

  return (
    <Box
      padding="2rem 1rem"
      flexBasis="0"
      flexGrow="1"
      flexShrink="1"
      backgroundColor="#232A34"
      boxShadow="5px 5px #1A202C"
      textAlign="center"
      as="form"
      marginX="1rem"
      position="relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading ? (
        <Spinner className="spinner" />
      ) : (
        <>
          {" "}
          <Heading marginBottom="1rem"> Caption Meme </Heading>
          {boxesArr.map((_, idx) => (
            <ModalInput
              errors={errors}
              register={register}
              key={idx}
              idx={idx}
            />
          ))}
          <Button
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            display="inline-block"
            marginTop="20px"
            type="submit"
            float="left"
          >
            Submit
          </Button>{" "}
        </>
      )}

      <Link as={ReachLink} to="/">
        {" "}
        <Button 
          color="#fff"
          bg="transparent"
          _hover={{ transform:'translateY(-5px)' }}
          display="block"
          position="absolute"
          bottom="10px"
          right="15px"
        >
          go back
        </Button>{" "}
      </Link>
    </Box>
  );
}
