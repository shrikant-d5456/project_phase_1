import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 

const slider = () => {
  return (
    
    <AwesomeSlider
    className=' z-0 w-full lg:h-[600px] h-[200px] rounded-2xl overflow-hidden'
    >
          <div className='w-full h-full'><img className='w-full h-full' src='https://static.vecteezy.com/system/resources/previews/026/593/849/non_2x/nature-beautiful-landscape-wallpaper-background-design-free-photo.jpg'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://wallpaperaccess.com/full/185323.jpg'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://wallpaperaccess.com/full/185382.jpg'/></div>
    </AwesomeSlider>
    
  )
}

export default slider