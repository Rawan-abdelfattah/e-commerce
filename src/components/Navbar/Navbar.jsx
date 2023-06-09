import React from "react";
import logo from'../../images/freshcart-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
export default function Navbar() {
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
            <ul className="navbar-nav mb-auto mb-2 mb-lg-0 mt-2">
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
                <NavLink className="nav-link" to="/">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Brands
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">
              <li className="nav-item">
                <NavLink classname="nav-link" to="/">
                  <button type="button" className="btn  position-relative ">
                    Card
                    {/* <i className="fa-solid fa-cart-shopping" /> */}
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      10
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  LogIn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  LogOut
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
