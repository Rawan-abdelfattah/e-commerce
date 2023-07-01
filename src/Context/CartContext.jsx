import axios from "axios";
import { createContext } from "react";

export let cartContext=createContext();

export function cardContextProvider(props){

    let headers={
        token:localStorage.getItem('userToken')
    }

    function addToCart(productId){
       return axios.post=(``,
       {
        productId:productId
       },
       {
        headers:headers
       }
       ).then((response)=>response)
       .catch((error)=>error);

    }

   return <cardContextProvider.Proivider value={{addToCart}}>
    {props.children}

    </cardContextProvider.Proivider>

}