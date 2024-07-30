import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Videos , SideBar} from '../components'
import { fetchFromAPI } from '../utils/FetchFromAPI'


const Feeds = () => {
  let [ selectedCategory , setSelectedCategory ] = useState('New')
  let [ videos , setVideos ] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack 
    sx={{flexDirection:{sm:'column',md:'row'} , height:{ sm:`auto` , md:"92vh"}}}>
      <Box sx={{height:{ sm:'auto' , md:"92vh" } , borderRight:'1px solid #3d3d3d' , px:{sm:0,md:2}}}> 
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography
        variant='body2'
        className='copyright'
        sx={{mt:1.5 , color:'#fff'}}>
          CopyRight 2024 Eng\ Mostafa
        </Typography>
      </Box>

      <Box p={2} sx={{ height:'90vh' , flex:'2' , overflowY:'auto'}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}} >
          {selectedCategory} <span style={{color:"#fc1503"}}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feeds
