import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ({video : { id : {videoId} , snippet }}) => {
   return (
      <Card sx={{width : '100%' , borderRadius:0}}>
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{width:'100%' , height:170  }}/>
         </Link>
         <CardContent sx={{width:'100%',height:'70px',background:'#1e1e1e'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
               <Typography variant='subtitle1' fontWeight={`bold`} color={`#fff`}>{ snippet?.title.slice(0,60) || demoVideoTitle}</Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
               <Typography variant='subtitle2' fontWeight={`bold`} color={`gray`}>
                  { snippet?.channelTitle.slice(0,60) || demoChannelTitle}
                  <CheckCircle sx={{fontSize:'12px', marginLeft:'5px'}} />
               </Typography>
            </Link>
         </CardContent>
      </Card>
   )
}

export default VideoCard
