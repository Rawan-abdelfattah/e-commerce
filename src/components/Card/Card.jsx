import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export default function Card() {
  let { getLoggedUserCart , removeItem , updateCount }=useContext(cartContext)
  const [cardDetails, setCardDetails] = useState(null)
  const [totalPrice, setTotalPrice] = useState(0)
  const [isLoading , setIsLoading] = useState(false)

  async function getCard() {
    setIsLoading(true);
    try {
      const response = await getLoggedUserCart();
      console.log(response);
      if (response?.data?.status === 'success') {
        setCardDetails(response.data.data);
        setTotalPrice(response.data.data.totalCartPrice);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setIsLoading(false);
    }
  }

  
  
  async function remove(productId)
  { 
    let response=await removeItem(productId);
    console.log(productId);
    if(response?.data?.status === 'success'){
      setCardDetails(response.data.data);
      setCardDetails(response.data.data); 

    } 

  }

  async function update(productId ,count)
  {   
    let response=await updateCount(productId , count);
    console.log(response);
    if(response?.data?.status === 'success'){  
      getCard()
      setCardDetails(response.data.data);
      setCardDetails(response.data.data); 
    

    }   
  }

  
  useEffect(()=>{
    getCard();

  },[])
  return (
    <>
      {isLoading ? (
        <div className='text-center d-flex align-items-center justify-content-center vh-100'>
          <i className='fas  fa-spin fa-3x fa-spinner text-main'></i>
        </div>
      ) : cardDetails ? (
        <>
          <div className='bg-main-light p-4 m-4 my-4 mt-4'>
            <h3 className='fw-bold'>Shop Cart : </h3>
            <h6 className='text-main'>Total Cart Price : {cardDetails.totalCartPrice}</h6>
  
            {(() => {
              const displayedProducts = new Set();
              return cardDetails.products.map((product) => {
                if (!displayedProducts.has(product.product._id) && product.count > 0) {
                  displayedProducts.add(product.product._id);
                  return (
                    <div key={product.product._id} className="row border-bottom py-2 align-items-center">
                      <div className="col-md-1">
                        <img src={product.product.imageCover} className='w-100' alt="" />
                      </div>
                      <div className="col-11 d-flex justify-content-between">
                        <div>
                          <h6>{product.product.title}</h6>
                          <h6 className='text-main'>price : {product.price * product.count} EGT</h6>
                          <button
                            className='btn m-0 p-0 p-1 border'
                            onClick={() => remove(product.product._id)}
                          >
                            <i className='fas fa-trash-can'></i> Remove
                          </button>
                        </div>
                        <div className='d-flex'>
                          <button className='btn mb-3' onClick={() => update(product.product._id, product.count - 1)}>
                            -
                          </button>
                          <span className='mt-4 mb-4'>{product.count}</span>
                          <button className='btn mb-3' onClick={() => update(product.product._id, product.count + 1)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null; // Return null for products that have already been displayed
              });
            })()}
  
            <h5>Total Card Price: {totalPrice}</h5>
            <button className='btn bg-main mt-4 '>
              <Link to={'/checkout'} className='text-white link'>
                payment
              </Link>
            </button>
          </div>
        </>
      ) : null}
    </>
  );
  
}
