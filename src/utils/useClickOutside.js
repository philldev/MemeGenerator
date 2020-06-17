import { useRef, useEffect } from "react";

export default function useClickOutside(handler) {
  const element = useRef();

  useEffect(() => {
    const handleEvent = (e) => {
      if (!element.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  });

  return element;
}
