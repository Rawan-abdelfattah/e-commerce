import axios from "axios";
import { useFormik, yupToFormErrors } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { baseUrl } from "../../utils/baseUrl";
import { cartContext } from "../../Context/CartContext";

export default function CheckOut() {
  const [isLoading, setIsLoading] = useState(false);
  const [MessageError, setMessageError] = useState("");
  let {onlinePayment , cardId} = useContext(cartContext)

  let navigate = useNavigate();
  async function handleCheckOut(values) {  
    setIsLoading(true);
    let response  = await onlinePayment(cardId, values)
    

    if(response?.data?.status == 'success'){
      console.log(response);
      window.location.href = response.data?.session.url
      console.log(response.data?.session.url);

    }
    setIsLoading(false);
  
 
  }

  let validationSchema = Yup.object({
    details: Yup.string().required("details is required"),
    city: Yup.string().required("city is required"),
    phone: Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/, "phone must be an Egyptian number"),
  });
  

  let formik = useFormik({
    initialValues: {
      details: "",
      city: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handleCheckOut,
  });

  return (
    <>
      <div className="container">
        <form
          action=""
          className="w-75 mx-auto py-3  "
          onSubmit={formik.handleSubmit}
        >
          <h2>CheckOut Now :</h2>
          {MessageError ? (
            <div className="alert alert-danger">{MessageError}</div>
          ) : null}

          <label htmlFor="details">details :</label>
          <input
            onBlur={formik.handleBlur}
            type="text"
            className="form-control"
            name="details"
            id="details"
            value={formik.values.details}
            onChange={formik.handleChange}
          />
          {formik.errors.details && formik.touched.details ? (
            <div className="alert alert-danger">{formik.errors.details}</div>
          ) : (
            ""
          )}

          <label htmlFor="city">city :</label>
          <input
            onBlur={formik.handleBlur}
            type="text"
            className="form-control"
            name="city"
            id="city"
            value={formik.values.city}
            onChange={formik.handleChange}
          />

          {formik.errors.city && formik.touched.city ? (
            <div className="alert alert-danger">{formik.errors.city}</div>
          ) : (
            ""
          )}

          <label htmlFor="phone">Phone :</label>
          <input
            onBlur={formik.handleBlur}
            type="tel"
            className="form-control"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger">{formik.errors.phone}</div>
          ) : (
            ""
          )}

          {isLoading ? (
            <button type="button" className="btn text-white bg-main mt-2">
              <i className="fas fa-spinner fa-spin "></i>
            </button>
          ) : (
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="btn text-white bg-main mt-2"
            >
              CheckOut
            </button>
          )}
        </form>
      </div>
    </>
  );
}
