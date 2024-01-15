import axios from "axios";
import { createContext } from "react";
import { baseUrl } from "../utils/baseUrl";


export let cartContext = createContext();

export function CardContextProvider(props) {
  let headers = {
    token: localStorage.getItem('userToken')
  };

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

  return (
    <cartContext.Provider value={{ addToCart , getLoggedUserCart}}>
      {props.children}
    </cartContext.Provider>
  );
}
