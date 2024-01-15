import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";


export let cartContext = createContext();

export function CardContextProvider(props) {
  let headers = {
    token: localStorage.getItem('userToken')
  };

  const [cardId, setCardId] = useState(null)
  const [numOfCartItems, setNumOfCartItems] = useState(0)

  async function getCard(){
    let response = await getLoggedUserCart();
    if(response.data.status == 'success'){
      setCardId(response?.data?.date?._id)
      setNumOfCartItems(response?.data?.numOfCartItems)
    }

    console.log(response.data?.data?._id)
  }

  useEffect(()=>{
    getCard()
  },[])

  function addToCart(productId) {
    return axios.post(
      `${baseUrl}/cart`,
      {
        productId: productId
      },
      {
        headers: headers
      }
    )
    .then((response) => response)
    .catch((error) => error);
  }

  function getLoggedUserCart(productId) {
    return axios.get(
      `${baseUrl}/cart`,
      {
        headers: headers
      }
    )
    .then((response) => response)
    .catch((error) => error);
  }

  function onlinePayment(cardId , shippingAddress) {
    return axios.post(
      `${baseUrl}/order/checkout-session/${cardId}?url=http://localhost:3000`,
      {
        shippingAddress: shippingAddress
      },{
        headers: headers
      }
    )
    .then((response) => response)
    .catch((error) => error);
  }

  function removeItem(productId) {
    return axios.delete(
      `${baseUrl}/cart/${productId}`,
      {
        headers: headers
      },
      {
        productId: productId
      }
    )
    .then((response) => response)
    .catch((error) => error);
  }

  function updateCount(productId , count) {
    return axios.put(
      `${baseUrl}/cart/${productId}`,{count},
      {
        headers: headers
      },
      {
        productId: productId
      }, 
   
    )
    .then((response) => response)
    .catch((error) => error);
  }



  return (
    <cartContext.Provider value={{updateCount , removeItem , setNumOfCartItems ,  cardId , numOfCartItems , onlinePayment , addToCart , getLoggedUserCart}}>
      {props.children}
    </cartContext.Provider>
  );
}
