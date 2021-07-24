import React from 'react'
import { SliderData } from './CarrauselData'

const Carousel = () => {
    return (
        <>
          {SliderData.map((slide, index)=>{
              return<video src={slide.image} alt="img" />;
          })}  
        </>
    )
}

export default Carousel
