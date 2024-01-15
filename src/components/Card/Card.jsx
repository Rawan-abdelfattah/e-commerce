import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export default function Card() {
  let { getLoggedUserCart }=useContext(cartContext)
  const [cardDetails, setCardDetails] = useState(null)
  const [isLoading , setIsLoading] = useState(false)

  async function getCard()
  {
    setIsLoading(true)
    let response=await getLoggedUserCart();
    console.log(response);
    if(response?.data?.status === 'success'){
      setCardDetails(response.data.data);
    }
    setIsLoading(false)

  }
  useEffect(()=>{
    getCard();

  },[])
  return (
    <>
    {isLoading? 
      <div className='text-center d-flex align-items-center justify-content-center vh-100'>
        <i className='fas  fa-spin fa-3x fa-spinner text-main '></i>
      </div>:    (cardDetails ?
    <>  <div className='bg-main-light p-4 m-4 my-4 mt-4'> 
    <h3 className='fw-bold'>Shop Cart : </h3>
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
        <span className='mt-4 mb-4'>1</span>
        <button className='btn mb-3'> + </button>
        </div>

         </div>
       
      </div>)}
          
        <button className='btn bg-main mt-4 '>
          <Link to={'/checkout'} className='text-white link'>payment
          </Link>
          </button>

    </div> </>  :'')}


     </>
  )
}
