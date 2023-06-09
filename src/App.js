// import logo from './logo.svg';
import "./App.css";
import {RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import Products from "./Products/Products";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Layout from "./Layouts/Layout";



function App() {
  let routes=createBrowserRouter([
    {
      pass:'',
      element:<MainLayout/>,
      children:[ 
        {index:true , element:<HomePage/>},
        {index:'home' , element:<HomePage/>},
        {path:'products' , element:<Products/>},
        {path:'product-details/:id' , element:<ProductsDetails/>},
        // {path:'login' , element:<Login/>},
        // {path:'register' , element:<Register/>},
        // {index:true , element:<HomePage/>},
        // {index:true , element:<HomePage/>}
      ]
    },
    {
      pass:'',
      element:<Layout/>,
      children:[ 
        {path:'login' , element:<Login/>},
        {path:'register' , element:<Register/>}
      ]
    },
   
    
  ]

  )
  return (
    <>
    <RouterProvider router={routes}/>

    </>
  );
}

export default App;
