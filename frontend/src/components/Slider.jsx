import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider); 

const slider = () => {
  return (
    
<<<<<<< HEAD
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={5000}
    bullets={true}
    className=' z-0 w-full lg:h-[700px] md:h-[500px] h-[250px] lg:rounded-2xl overflow-hidden'
  >
          <div className='w-full h-full'><img className='w-full h-full' src='https://krishnaayurved.com/cdn/shop/files/diabic-care-landscape-1920-x1040-672c43407bfcd.webp?v=1730954644'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://krishnaayurved.com/cdn/shop/files/she-care-landscape-1920-x-1040-672c43400f985.webp?v=1730954644'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://krishnaayurved.com/cdn/shop/files/web-banner-55455.jpg?v=1714498263'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://krishnaayurved.com/cdn/shop/files/web_banner_copy1.jpg?v=1697303065'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://krishnaayurved.com/cdn/shop/files/banner-3564645.jpg?v=1704390628'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://krishnaayurved.com/cdn/shop/files/diabic-care-landscape-1920-x1040-672c43407bfcd.webp?v=1730954644'/></div>
    </AutoplaySlider>
=======
    <AwesomeSlider
    className=' z-0 w-full lg:h-[600px] h-[200px] rounded-2xl overflow-hidden'
    >
          <div className='w-full h-full'><img className='w-full h-full' src='https://static.vecteezy.com/system/resources/previews/026/593/849/non_2x/nature-beautiful-landscape-wallpaper-background-design-free-photo.jpg'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://wallpaperaccess.com/full/185323.jpg'/></div>
          <div className='w-full h-full'><img className='w-full h-full' src='https://wallpaperaccess.com/full/185382.jpg'/></div>
    </AwesomeSlider>
>>>>>>> e5ee7ca266caf53a12b75b0fabda994dcfacb0b9
    
  )
}

export default slider