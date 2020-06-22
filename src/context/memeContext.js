import React, { createContext, useState } from "react";
import fetchMemes from "../utils/fetchMemes";
import useLocalStorage from "../utils/useLocalStorage";

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [memes, setMemes] = useState([]);
  const [savedMemes, setSavedMemes] = useState([]);
  const [error, setError] = useState(null);
  useLocalStorage(setMemes, fetchMemes, memes, setSavedMemes, savedMemes);

  const value = {
    memes,
    handleSearch: (str) => {
      setSearch(str);
    },
    search,
    savedMemes,
    setSavedMemes,
    error,
    setError,
  };

  return <MemeContext.Provider value={value}>{children}</MemeContext.Provider>;
};
