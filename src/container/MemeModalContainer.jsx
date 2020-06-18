import React, { useContext } from "react";
import { MemeContext } from "../context/memeContext";
import MemeModal from "../components/main/MemeModal";

export default function MemeModalContainer() {
  const { isOpen } = useContext(MemeContext);

  if (!isOpen) return null

  return <>
    <MemeModal/>
  </>;
}
