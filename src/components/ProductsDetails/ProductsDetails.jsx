import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../utils/baseUrl';
import axios from 'axios';
import Slider from 'react-slick';

export default function ProductsDetails() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
   
    let {id}= useParams()
    const [product, setProduct] = useState([]);


  const getProduct= async () => {
    let { data } = await axios.get(`${baseUrl}/products/${id}`);
    console.log(data.data);
    setProduct(data.data);
  };

  useEffect(() => {
    getProduct() 
      
  }, [])

  return (
    <>
    <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="row">
        <div className="col">
        {/* <Slider {...settings}>
  {product && product.map((items) => {
    return (
      <div key={items.id}> */}
        <img src={product.imageCover} className=' rounded' height={600} alt="" />
      {/* </div>
    );
  })}
</Slider> */}
        </div>
      
        </div>
          <div className="col-md-6">      
              <h4 className='fw-bold'>{product.title}</h4>

            <p className='text-secondary'>{product.description}</p>
            <p>{product.price} EGP</p>
            <button className='btn bg-main text-white text-center w-100'>Add to card</button>
        </div>
    </div>
    </>
  )
}
