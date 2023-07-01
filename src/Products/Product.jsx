import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({Products}) {
  console.log(Products);
  return (
    <>
      {Products &&Products.map((items)=>{
        return (
        <div className='col-md-2 gy-3' key={items._id}>
        <Link className='text-decoration-none text-dark' to={'/product-details/'+items._id}>
          <div className="product">
        <img src={items.imageCover} className='w-100 ' alt="" />
        <h6 className='text-main'>{items.category.name}</h6>
        <p className='fw-bold'>{items.title.split(' ').slice(0,2).join(' ')}</p>
        <div className='d-flex justify-content-between'>        
                <span>{items.price}EGP</span>

<p>        <i class="fa-solid fa-star rating-color"></i> {items.ratingsAverage}</p>
</div>

        
        <butto className='btn bg-main text-white text-center w-100'>Add to Card</butto>
        
        </div>
           </Link>
        </div>
        )
      }
      )}

    </>
  )
}
