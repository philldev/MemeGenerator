import { useState } from "react";

export default function useColumnRef() {
  const [ref, setRef] = useState(null);

  return [ref, setRef];
}
