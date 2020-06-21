import { useEffect, useState } from 'react'

export default function useLoading(input) {
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    if (input) {
      setLoading(false)
    }
  }, [input])

  return loading
}
