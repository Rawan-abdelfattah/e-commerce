import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl.js";
import axios from "axios";
import Product from "./Product.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getAllCategories = async () => {
    let { data } = await axios.get(`${baseUrl}/products`);
    console.log(data.data);
    setProducts(data.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <Product Products={products} />
        </div>
      </div>
    </>
  );
}
