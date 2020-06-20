import { useEffect } from "react";

export default function useLocalStorage (setState, fetchMemes, state) {
  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("imgflip"));

    if (localState) {
      setState(localState);
    } else {
      fetchMemes(setState);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("imgflip", JSON.stringify(state));
  }, [state]);
  
  // useEffect(() => {
  //   const localSavedmemes = JSON.parse(
  //     localStorage.getItem("imgflipSavedMeme")
  //   );

  //   if (localSavedmemes) {
  //     setSavedMemes(localSavedmemes)
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("imgflipSavedMeme", JSON.stringify(savedMemes));
  // }, [savedMemes]);

}