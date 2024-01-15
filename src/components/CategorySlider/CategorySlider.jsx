import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import {baseUrl} from '../../utils/baseUrl.js';
import './CategorySlider.css'
export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5 ,
    autoplay:true,
     autoplaySpeed:3000
  };

  const [categories, setCategories] = useState([])

  const getAllCategories=async()=>{
    let{data}=await axios.get(`${baseUrl}/categories`) 
    console.log(data.data);
     
    setCategories(data.data)
   }
   useEffect(()=>{
    getAllCategories()

   },[])
  return (

    <>
     <div className= 'container my-3 p-3' >
      
      <h2>Shop popular Categories</h2>
    <Slider {...settings}>  
      {categories.map((items)=>{
        return (<div className='' key={items._id}>
        <img src={items.image} className='w-100 category-slider'  alt="" />
        <h6>{items.name}</h6>
        </div>
        )
      }
      
      )}
    </Slider>
    </div>
    </>
  )
}
