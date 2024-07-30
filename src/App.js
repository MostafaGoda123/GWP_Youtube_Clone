import { Box } from '@mui/material'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Navbar , Feeds , VideoDetails , ChannelDetails , SearchFeed } from './components'

const App = () => {
  return (
    <HashRouter>
      <Box sx={{background:"#000"}}>
        <Navbar />
        <Routes>
          <Route path="/" exact             element={<Feeds />} />
          <Route path="/video/:id"          element={<VideoDetails />} />
          <Route path="/channel/:id"        element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </HashRouter>
  )
}

export default App
