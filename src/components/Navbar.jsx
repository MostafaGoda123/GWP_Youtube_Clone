import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import { SearchBar } from '../components'

const Navbar = () => {
  return (
    <Stack 
      direction={'row'}
      p={2}
      alignItems={'center'}
      sx={{background:`#000`,justifyContent:"space-between",position:"sticky",top:0}}>
      <Link to={`/`}>
        <img src={logo} alt="" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
