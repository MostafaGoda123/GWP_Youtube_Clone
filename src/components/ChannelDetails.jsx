import React, { useEffect, useState } from 'react'
import { Videos , ChannelCard } from './'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchFromAPI } from '../utils/FetchFromAPI'



const ChannelDetails = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
  // console.log(channelDetail);
  // console.log(videos);

  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div 
        style={{
          background: `linear-gradient(90deg, rgba(0,255,253,1) 0%, rgba(6,134,244,1) 33%, rgba(137,0,255,1) 66%, rgba(230,6,244,1) 100%)`
          ,zIndex:10,
          height:300
        }} />
        <ChannelCard channelId={channelDetail?.contentDetails?.id}  url={channelDetail?.snippet?.thumbnails?.high?.url}  title={channelDetail?.snippet?.title} subscribers={channelDetail?.statistics?.subscriberCount}  />
      </Box>
      <Box py={10} sx={{paddingX:{sm:2 , md:4 , lg:5}}}>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
