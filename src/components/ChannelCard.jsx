import { CheckCircle } from '@mui/icons-material'
import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({channelId , url , title , subscribers}) => {
   return (
      <Box 
      mt={`${subscribers? "-80px" : "0"}`}
      sx={{display:'flex' , justifyContent:'center' , alignItems:"center" , width:"100%" , height:"240px"}}>
         <Link to={`/channel/${channelId}`}
         style={{ display:'flex' , flexDirection:'column' , gap:'10px' , alignItems:'center'}}>

            <CardMedia image={url || demoProfilePicture} alt={title}
            sx={{width : 170 , height:170 , borderRadius:'50%', border:'1px solid #3e3e3e'}} />

            <Typography variant='h6' fontWeight={`bold`} color={`#fff`}>
               {title}
               <CheckCircle sx={{fontSize:'15px', marginLeft:'5px'}} />
            </Typography>
            {subscribers &&
            <Typography variant='h6' fontWeight={`bold`} color={`gray`}>
               {subscribers}
               <span style={{marginLeft :'10px'}}>Subscribers</span>
            </Typography>}

         </Link>

      </Box>
   )
}

export default ChannelCard
