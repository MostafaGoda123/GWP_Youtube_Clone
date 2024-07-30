import { Box, Stack } from '@mui/material';
import React from 'react'
import {VideoCard , ChannelCard} from '../components';


const Videos = ({ videos }) => {
   return (
      <Stack 
      sx={{display:"grid" , gridTemplateColumns:'repeat(auto-fill,minmax(250px , 1fr))' , gap:'15px'}} >
         {videos.map((item , idx) => (
            <Box key={idx}>
               {item.id.videoId && <VideoCard video={item} />}
               {item.id.channelId && <ChannelCard channelId={item?.id?.channelId}  url={item?.snippet?.thumbnails?.high?.url}  title={item?.snippet?.title}  />}
            </Box>
         ))}
      </Stack>
   )
}

export default Videos
