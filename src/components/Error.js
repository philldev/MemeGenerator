import React, { useContext } from "react";
import { MemeContext } from "../context/memeContext";
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/core";

export default function Error() {
  const { error, setError } = useContext(MemeContext);

  

  const handleCloseAlert = () => {
    setError(null);
  };

  return error ? (
    <Alert
      status="error"
      className="slide_up"
      marginTop="100px"
      position="fixed"
      bottom="20px"
      left="35%"
      paddingRight="50px"
    >
      <AlertIcon />
      {error}
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={handleCloseAlert}
      />
    </Alert>
  ) : null;
}
