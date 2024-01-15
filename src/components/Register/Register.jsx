import axios from "axios";
import {useFormik, yupToFormErrors } from "formik";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { baseUrl } from "../../utils/baseUrl";

export default function Register() {
  const [Isloading, setIsloading] = useState(false);
  const [MessageError, setMessageError] = useState("");

  let navigate = useNavigate();
  async function handleRegister(values) {
    setIsloading(true);
    try {
      const { data } = await axios.post(`${baseUrl}/auth/signup`, values);
      setIsloading(false);
  
      if (data.message === "success") {
        setIsloading(false);
        navigate("/login");
      }
    } catch (error) {
      setIsloading(false);
      setMessageError(`${error.response.data.errors.msg }:${error.response.data.errors.param} `);
      console.log(error.response.data); // Log the error response for debugging
    }
  }
  
  let validationSchema = Yup.object({
    name: Yup.string().required("name is required").min(3, "name minlength 3").max(10, "name maxlength"),
    email: Yup.string().required("email is required").email(),
    password: Yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/, "Password must contain at least one uppercase and one lowercase letter"),
    rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref('password')], "password dosnot  match"),
    phone: Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/, "phone must be egyption number"),
  });

  
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    // validate,
    validationSchema,
    onSubmit: handleRegister
  });

  // function validate(values){
  //   let errors={};

  //   if(!values.name)
  //   {
  //     errors.name='Name is Required';
  //   }else if(values.name.length < 3)
  //   {
  //     errors.name='Name minLength is 3';

  //   }else if(values.name.length > 10)
  //   {
  //     errors.name='Name maxLength is 10';

  //   }
  //   if(!values.email)
  //   {
  //     errors.email='Email is Required';
  //   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))

  //   {
  //     errors.email='Email is Required';

  //   }

  //   if(!values.password)
  //   {
  //     errors.password='Password is Required';
  //   }else if(!/^[A-Z][a-z0-9]{5,10}$/i.test(values.password))
  //   {
  //     errors.password='Password is must start with uppercase........';

  //   }
  //   if(!values.rePassword)
  //   {
  //     errors.rePassword='rePassword is Required';
  //   }else if(values.password !== values.rePassword)
  //   {
  //     errors.rePassword='password not match ';

  //   }
  //   if(!values.phone)
  //   {
  //     errors.phone='Phone is Required';
  //   }else if(!/^01[0125][0-9]{8}$/i.test(values.phone))
  //   {
  //     errors.phone='Phone must be valid egy phone number';

  //   }

  //   return errors;
  // }

  return (
    <>
    
      <div className="container">
        <form
          action=""
          className="w-75 mx-auto py-3  "
          onSubmit={formik.handleSubmit}
        >
          <h2>Register Now :</h2>
{MessageError ? <div className="alert alert-danger">{MessageError}</div> : null}

          <label htmlFor="name">Name : </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : (
            ""
          )}

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

          <label htmlFor="rePassword">rePassword :</label>
          <input
            onBlur={formik.handleBlur}
            type="password"
            className="form-control"
            name="rePassword"
            id="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger">{formik.errors.rePassword}</div>
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
              Register
            </button>
          )}
        </form>
      </div>
    </>
  );
}
