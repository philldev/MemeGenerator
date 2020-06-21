import React, { useState } from 'react'

export default function useMemes() {
  const [state, setState] = useState([]);

  return {state, setState}
}
