import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory , setSelectedCategory }) => {

   return (
      <Stack 
      direction={`row`}
      sx={{height:{sm:'auto' , md:'90%'} , flexDirection:{md:'column'} , overflowY:'auto'}}>
         {categories.map(Category => {
            return <button 
                     onClick={() => setSelectedCategory(Category.name) }
                     key={Category.name}
                     className='category-btn'
                     style={{background:Category.name === selectedCategory && '#fc1503' , color:'#fff'}}>
               <span style={{textAlign:'center' , width:40 , marginRight:5 , color : Category.name === selectedCategory ? 'white' : 'red' }}>{Category.icon}</span>
               <span style={{ opacity: Category.name === selectedCategory ? '1' : '0.8' }}>{Category.name}</span>
            </button>
         })}
      </Stack>
   )
}

export default SideBar
