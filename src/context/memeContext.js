import React, { createContext, useEffect, useState } from "react";
import fetchMemes from "../utils/fetchMemes";

const initialState = [];

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  /*************************/
  // main state
  const [state, setState] = useState(initialState);

  // search state
  const [search, setSearch] = useState("");

  // selected meme state for open modal
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // input text from modal
  const [text, setText] = useState(null);

  // posted memes
  const [postedMeme, setPostedMeme] = useState(null);

  /*************************/

  //filtered memes from search input
  const filteredMemes = state.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  // local strage
  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("imgflip"));

    if (localState.length > 0) {
      setState(localState);
    } else {
      fetchMemes(setState);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("imgflip", JSON.stringify(state));
  }, [state]);


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
    text,
    setText,
    postedMeme,
    setPostedMeme,
  };


  return <MemeContext.Provider value={value}>{children}</MemeContext.Provider>;
};
