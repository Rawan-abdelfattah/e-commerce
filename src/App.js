// import logo from './logo.svg';
import "./App.css"; 
import { RouterProvider, createHashRouter } from 'react-router-dom';
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import Products from "./Products/Products";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Card from "./components/Card/Card";
import About from "./components/About/About";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { CardContextProvider } from "./Context/CartContext";
import { Toaster } from 'react-hot-toast';
import { Offline } from "react-detect-offline";
import CheckOut from "./components/CehckOut/CheckOut";


function App() {
  function saveUserDate() {
    let encodedToken = localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken)
    setUserData(decodedToken)
  }
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      saveUserDate();
    }
  }, [])
  const [UserData, setUserData] = useState(null)

  let routes = createHashRouter([
    {
      pass: '',
      element: <MainLayout UserData={UserData} setUserData={setUserData} />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'About', element: <ProtectedRoute><About /></ProtectedRoute> },
        { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'card', element: <ProtectedRoute><Card /></ProtectedRoute> },
        { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'checkout', element: <ProtectedRoute><CheckOut /></ProtectedRoute> },
        { path: 'product-details/:id', element: <ProductsDetails /> },
        { path: 'login', element: <Login saveUserDate={saveUserDate} /> },
        { path: 'register', element: <Register /> },
        //{path:'*' , element:<NotFound/>},
      ]
    },
  ]
  )
  return (
    <>
      <CardContextProvider>
        <div className='offline'>
                <Offline >Only shown offline (surprise!)</Offline>

        </div>
        <Toaster/>
        <RouterProvider router={routes} />
      </CardContextProvider>
    </>
  );
}

export default App;
