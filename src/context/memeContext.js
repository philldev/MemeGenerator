import React, { createContext, useEffect, useState } from "react";
import fetchMemes from "../utils/fetchMemes";

const initialState = [];

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [search, setSearch] = useState('');

  
  const filteredMemes = state.filter(meme => meme.name.toLowerCase().includes(search.toLowerCase()))
  
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
  
  const value = {
    memes : filteredMemes,
    handleSearch : (str) => { setSearch(str)}
  };

  return <MemeContext.Provider value={value}>{children}</MemeContext.Provider>;
};
