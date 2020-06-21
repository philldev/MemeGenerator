import React from "react";
import { Button } from "@chakra-ui/core";

export default function FavouriteButton({handleSaveMeme, saved}) {
  return (
    <Button

      backgroundColor={saved ? "red.300" : "blue.500"}
      _hover={{ backgroundColor: "blue.600" }}
      onClick={handleSaveMeme}
    >
      Save to Favourites
    </Button>
  );
}
