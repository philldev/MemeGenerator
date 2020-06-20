import React, { createContext, useEffect, useState } from "react";
import fetchMemes from "../utils/fetchMemes";
import useLocalStorage from "../utils/useLocalStorage";

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  
  const [search, setSearch] = useState("");


  const [memes, setMemes] = useState([]);
  
  useLocalStorage(setMemes, fetchMemes, memes);

  // selected meme state for open modal
  // const [selectedMeme, setSelectedMeme] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

  // posted memes
  // const [postedMeme, setPostedMeme] = useState(null);

  //TODO
  //saved memes states
  // const [savedMemes, setSavedMemes] = useState([]);

  const value = {
    memes,
    handleSearch: (str) => {
      setSearch(str);
    },
    search
  };

  return <MemeContext.Provider value={value}>{children}</MemeContext.Provider>;
};
