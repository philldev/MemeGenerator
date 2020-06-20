import React, { createContext, useEffect, useState } from "react";
import fetchMemes from "../utils/fetchMemes";
import useLocalStorage from "../utils/useLocalStorage";

const initialState = [];

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  //testing
  /*************************/
  // main state
  const [state, setState] = useState(initialState);

  // search state
  const [search, setSearch] = useState("");

  // selected meme state for open modal
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // posted memes
  const [postedMeme, setPostedMeme] = useState(null);

  //TODO
  //saved memes states
  const [savedMemes, setSavedMemes] = useState([]);

  /*************************/

  //filtered memes from search input
  const filteredMemes = state.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  // local strage
useLocalStorage(setState, fetchMemes, state, setSavedMemes, savedMemes)
  // provider value
  const value = {
    memes: filteredMemes,
    handleSearch: (str) => {
      setSearch(str);
    },
    setSelectedMeme,
    selectedMeme,
    isOpen,
    setIsOpen,
    postedMeme,
    setPostedMeme,
    setSavedMemes,
    savedMemes,
  };

  return <MemeContext.Provider value={value}>{children}</MemeContext.Provider>;
};
