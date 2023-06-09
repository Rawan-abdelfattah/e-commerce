import React from 'react'
import Slider from "react-slick";
import slider1 from'../../images/slider/slider1.jpg';
import slider2 from'../../images/slider/slider2.jpg';
import slider3 from'../../images/slider/slider3.jpg';
import slider4 from'../../images/slider/slider4.jpg';
export default function MainSlider() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 
  };
  return (
    <>
    <div className='my-3 p-3' >
    <Slider {...settings}>

      <img src={slider1} height={450} alt="" />
      <img src={slider2} height={450} alt="" />
      <img src={slider3} height={450} alt="" />
      {/* <img src={slider2} alt="" />
      <img src={slider3} alt="" /> */}
      <img src={slider4} height={450} alt="" />
     

    </Slider>
    </div>
    </>
  );
}
{/* <i className="fa-solid fa-cart-shopping" /> */}
