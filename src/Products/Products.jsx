import React, {  useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl.js";
import axios from "axios";
import Product from "./Product.jsx";
 
export default function Products() {
  const [products, setProducts] = useState([]);
  const  [isLoading, setisLoading] = useState(false);


  const getAllCategories = async () => {
    setisLoading(true)
    let { data } = await axios.get(`${baseUrl}/products`);
    console.log(data.data);
    setProducts(data.data);
    setisLoading(false)
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {isLoading?<div className="text-center">
            <i className="justify-content-center fas fa-3x fa-spinner fa-spin text-main"></i>

          </div>:<Product Products={products} />}
          
        </div>
      </div>
    </>
  );
}
