import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Videos } from '../components'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  let [ videos , setVideos ] = useState([])
  let { searchTerm } = useParams()
  // console.log(searchTerm);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} sx={{ height:'90vh' , flex:'2' , overflowY:'auto'}}>

      <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}} >
        <span style={{marginRight:'5px' , color:"#fc1503"}}>{searchTerm}</span>Videos
      </Typography>

      <Videos videos={videos} />

    </Box>
  )
}

export default SearchFeed
