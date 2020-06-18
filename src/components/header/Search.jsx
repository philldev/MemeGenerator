import { Input } from '@chakra-ui/core'
import React, { useContext } from 'react'
import { MemeContext } from '../../context/memeContext'

export default function Search() {
  const {handleSearch} = useContext(MemeContext)
  const handleInput = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <>
      <Input marginRight='1rem' width='auto' display='block' placeholder='Search meme template' color='black'  size='sm' onChange={handleInput}/>  
    </>
  )
}
