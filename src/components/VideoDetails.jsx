import { Box, CardContent, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import Videos from './Videos'
import { CheckCircle } from '@mui/icons-material'

const VideoDetails = () => {

  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  let { id } = useParams()
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id])
  // console.log(videoDetail);
  // console.log(videos);

  return (
    <Box py={5} px={2} minHeight={`95vh`} sx={{display:'flex' , gap:"20px" , flexDirection:{xs:'column',lg:'row'}}}>
      <Stack sx={{width:{md:'100%',lg:'75%'}}}>
        <ReactPlayer controls className="react-player" width={`100%`} url={`https://www.youtube.com/watch?v=${id}`} />
        <CardContent p={2}>
          <Typography variant='h6' color={`#fff`} mb={2}> 
            {videoDetail?.snippet?.title}
          </Typography>
          <Stack direction={`row`} justifyContent={`space-between`} alignItems={`center`}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Typography variant='subtitle1' color={`#fff`}>
                {videoDetail?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize:'12px', marginLeft:'5px',color:'gray'}} />
              </Typography>
            </Link>
            <Typography variant='subtitle2' color={`gray`} sx={{display:'flex',gap:'10px',alignItems:'center'}}>
              <span>{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views</span>
              <span>{parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes</span>
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
      <Box sx={{width:{md:'100%',lg:'25%'}}}>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default VideoDetails
