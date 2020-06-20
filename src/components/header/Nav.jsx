import { Box, Link } from '@chakra-ui/core'
import React from 'react'
import Search from './Search'
import { Link as ReachLink } from "react-router-dom";

export default function Nav() {
  return (
    <Box pos='fixed' top='0' zIndex='20' padding='1rem 2rem' color='#fff' background='#232A34' width='100%' display='flex' height='66px' justifyContent='space-between' alignItems='center'>
      <Box display='flex' as='nav'>
        <Link to='/' as={ReachLink} marginRight='1rem'> MemeGen </Link>
        <Link marginRight='1rem'> About </Link>
      </Box>

      <Box display='flex' as='nav' alignItems='center'>
       <Search />
       <Link to='/user' as={ReachLink} marginRight='1rem'>My Memes</Link>
       <Link marginRight='1rem'>Login</Link>
      </Box>
    </Box>
  )
}       