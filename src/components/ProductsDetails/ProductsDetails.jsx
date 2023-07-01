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

        const [isLoading, setisLoading] = useState(false)
   
    let {id}= useParams()
    const [product, setProduct] = useState([]);


  const getProduct= async () => {
    setisLoading(true)
    let { data } = await axios.get(`${baseUrl}/products/${id}`);
    console.log(data.data);
    setProduct(data.data);
    setisLoading(false)
  };

  useEffect(() => {
    getProduct() 
      
  }, [])

  return (
    <>
    
    <div className="container  ">
        <div className="row align-items-center pt-5 pb-5 py-3">
        
      
      {isLoading?
      <div className='text-center'>
        <i className='fas justify-content-center fa-spin fa-3x fa-spinner text-main '></i>
      </div>:<>
          <div className="col-md-4">    
    {/* <img src={product.imageCover} className=' rounded' height={600} alt="" /> */}
        <Slider {...settings}>
          {product.images && product.images.map((img)=>  <img   key={img.id} src={img} alt=''/>) }
        </Slider>  
</div>
          <div className="col-md-8   ">      
              <h4 className='fw-bold'>{product.title}</h4>

            <p className='text-mu'>{product.description}</p> 
            <div className='d-flex justify-content-between'> 
            <p>{product.price} EGP</p>
                   <p>  <i class="fa-solid fa-star rating-color"></i>{product.ratingsAverage}</p> 
</div>
            <button className='btn bg-main text-white text-center w-100'>Add to card</button>
        </div>
      </>}

        </div>
      
        
    </div>
    </>
  )
}
