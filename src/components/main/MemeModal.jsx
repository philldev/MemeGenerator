import { Box, Flex, ModalOverlay, Alert, AlertIcon } from "@chakra-ui/core";
import React, { useContext } from "react";
import { MemeContext } from "../../context/memeContext";
import useClickOutside from "../../utils/useClickOutside";
import ModalForm from "./ModalForm";
import ModalImage from "./ModalImage";

export default function MemeModal() {
  const { setIsOpen, isOpen, selectedMeme, postedMeme, setPostedMeme } = useContext(
    MemeContext
  );

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleClickOutside = () => {
    setIsOpen(false);
    setPostedMeme(null)
  };
  const elementRef = useClickOutside(handleClickOutside);

  return (
    <>
      {" "}
      {isOpen ? (
        <>
          {" "}
          <ModalOverlay bg="#1A365D" />
          <Box
            zIndex="1400"
            position="fixed"
            top="0"
            left="0"
            right="0"
            marginX="auto"
            padding="50px 50px"
            ref={elementRef}
          >
            {error && <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>}
            <Flex color="#fff">
              <ModalImage
                selectedMeme={selectedMeme}
                postedMeme={postedMeme}
                loading={loading}
              />
              <ModalForm
                handleClickOutside={handleClickOutside}
                setLoading={setLoading}
              />
            </Flex>
          </Box>{" "}
          
        </>
      ) : null}
    </>
  );
}
