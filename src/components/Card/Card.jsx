import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'

export default function Card() {
  let { getLoggedUserCart }=useContext(cartContext)
  const [cardDetails, setCardDetails] = useState(null)

  async function getCard()
  {
    let response=await getLoggedUserCart();
    console.log(response);
    if(response?.data?.status === 'success'){
      setCardDetails(response.data.data);
    }

  }
  useEffect(()=>{
    getCard();

  },[])
  return (
    <>
    {cardDetails ?
    <>  <div className='bg-main-light p-4 m-4 my-4 mt-4'> 
    <h3>Shop Cart : </h3>
    <h6 className='text-main'>Total Cart Price : {cardDetails.totalCartPrice}</h6>
     
          {cardDetails.products.map((product)=> 
          <div className="row border-bottom py-2 align-items-center">
            <div className="col-md-1">
              <img src={product.product.imageCover}className='w-100' alt="" />

            </div>
        <div className="col-11 d-flex justify-content-between"> 
        <div >
                  <h6>{product.product.title}</h6>
        <h6 className='text-main'>price : {product.price} EGT</h6>
        <button className='btn m-0 p-0  p-1 border'><i className='fas fa-trash-can'></i> Remove </button>
        </div>

        <div className='d-flex'>
                  <button className='btn mb-3'> - </button>
        <span className='mt-4 mb-4'>55</span>
        <button className='btn mb-3'> + </button>
        </div>

         </div>
      </div>)}
          
      

    </div> </>  :''}

     </>
  )
}
