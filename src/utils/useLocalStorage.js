import { useEffect } from "react";

export default function useLocalStorage (setState, fetchMemes, state, setSavedMemes, savedMemes) {
  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("imgflip"));

    if (localState) {
      setState(localState);
    } else {
      fetchMemes(setState);
    }
  }, [setState,fetchMemes]);
  useEffect(() => {
    localStorage.setItem("imgflip", JSON.stringify(state));
  }, [state]);
  
  useEffect(() => {
    const localSavedmemes = JSON.parse(
      localStorage.getItem("imgflipSavedMeme")
    );

    if (localSavedmemes) {
      setSavedMemes(localSavedmemes)
    }
  }, [setSavedMemes]);

  useEffect(() => {
    localStorage.setItem("imgflipSavedMeme", JSON.stringify(savedMemes));
  }, [savedMemes]);

}