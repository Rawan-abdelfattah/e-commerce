import React from "react";
import logo from'../../images/freshcart-logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
export default function Navbar({UserData ,logout}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-main-light  ">
        <div className="container ">
          <NavLink className="navbar-brand mt-2" to="/">
           <img src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {UserData !==null ?   <ul className="navbar-nav mb-auto mb-2 mb-lg-0 mt-2">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/brands">
                  Brands
                </NavLink>
              </li>
            </ul>
            : null} 

          

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">

              {UserData ==null? <>
                
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  LogIn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li></>:   <>
                       <li className="nav-item">
               <NavLink classname="nav-link" to="/card">
                 <button type="button" className="btn  position-relative ">
                   Card
                   <i class="fa-solid fa-cart-shopping text-main"></i>
                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                     10
                     <span className="visually-hidden">unread messages</span>
                   </span>
                 </button>
               </NavLink>
             </li>
              <li className="nav-item">
                <span onClick={logout} className="nav-link cursor-pointer" to="/">
                  LogOut
                </span>
              </li>
              </>
      }
          
           
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
