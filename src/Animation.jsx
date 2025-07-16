import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import myImg from './pic2.webp';
import myImg1 from "./pic.avif"

const Animation = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div >
        <Slider {...settings}>
      <div>
        <img src={myImg} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}} />
      </div>
      <div>
        <img src={myImg1} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}}/>
      </div>
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </Slider>
    </div>
  )
}

export default Animation