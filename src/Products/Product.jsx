import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
import { toast } from "react-hot-toast";

export default function Product({ Products }) {
  let { addToCart } = useContext(cartContext);

  async function addProduct(productId) {
    let response = await addToCart(productId);

    if (response?.data?.status === "success") {
      toast.success(response.data.message ,{duration:1500  , className:'border-success border'});
    } else {
      toast.error(response.data.message);
    }

    console.log(response);
  }

  console.log(Products);
  return (
    <>
      {Products &&
        Products.map((items) => {
          return (
                <div className="col-lg-2 col-6 gy-3 " key={items._id}>
              <Link
                className="text-decoration-none text-dark"
                to={"/product-details/" + items._id}
              >
                <div className="product">
                  <img src={items.imageCover} className="w-100 " alt="" />
                  <h6 className="text-main">{items.category.name}</h6>
                  <p className="fw-bold">
                    {items.title.split(" ").slice(0, 2).join(" ")}
                  </p>
                  <div className="d-flex justify-content-between">
                    <span>{items.price}EGP</span>

                    <p>
                      {" "}
                      <i class="fa-solid fa-star rating-color"></i>{" "}
                      {items.ratingsAverage}
                    </p>
                  </div>
                </div>
              </Link>
              <button
                className="btn bg-main text-white text-center w-100"
                onClick={() => addProduct(items._id)}
              >
                Add to Card
              </button>
            </div>
          
          );
        })}
    </>
  );
}
