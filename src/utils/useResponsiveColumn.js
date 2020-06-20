import { useState, useEffect } from "react";

export default function useResponsiveColumn() {
  const [num, setNum] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setNum(1);
      } else if (window.innerWidth <= 750 && window.innerWidth >= 451) {
        setNum(2);
      } else {
        setNum(3);
      }
    };

    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  });

  return num;
}
