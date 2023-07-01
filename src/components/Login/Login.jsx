import axios from "axios";
import {useFormik, yupToFormErrors } from "formik";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { baseUrl } from "../../utils/baseUrl";

export default function Login(props) {


  const [Isloading, setIsloading] = useState(false);
  const [MessageError, setMessageError] = useState("");

  let navigate = useNavigate();
  async function handleLogin(values) {
    setIsloading(true);
    try {
      const { data } = await axios.post(`${baseUrl}/auth/signin`, values);
      setIsloading(false);
  
      if (data.message === "success") {
        setIsloading(false);
        navigate("/");
        localStorage.setItem('userToken',data.token)
        props.saveUserDate()
      }
    } catch (error) {
      setIsloading(false);
      setMessageError(error.response.data.errors.msg || "An error occurred");
      console.log(error.response.data); // Log the error response for debugging
    }
  }
  
  
  let validationSchema = Yup.object({
    email: Yup.string().required("email is required").email(),
    password: Yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/, "Password must contain at least one uppercase and one lowercase letter"),
  });

  
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate,
    validationSchema,
    onSubmit: handleLogin
  });



  return (
    <>
      <div className="container">
        <form
          action=""
          className="w-75 mx-auto py-3  "
          onSubmit={formik.handleSubmit}
        >
          <h2>Login Now :</h2>
          {MessageError && <div className="alert alert-danger">{MessageError}</div>}

        
          <label htmlFor="email">Email :</label>
          
          <input
            onBlur={formik.handleBlur}
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="password">Password :</label>
          <input
            onBlur={formik.handleBlur}
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : (
            ""
          )}


          {Isloading ? (
            <button type="button" className="btn text-white bg-main mt-2">
              <i className="fas fa-spinner fa-spin "></i>
            </button>
          ) : (
            <button
            disabled={! (formik.isValid && formik.dirty)  }               
            type="submit"
            className="btn text-white bg-main mt-2"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}
