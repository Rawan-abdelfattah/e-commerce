import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function MainLayout({UserData , setUserData}) {
  let navigate= useNavigate();

  function logout(){
    localStorage.removeItem('userToken')
    setUserData(null)
    return navigate('/login')
  }
  return (
    <>
    <Navbar UserData={UserData} logout={logout}/>
    <Outlet/>
    <Footer/>
    </>
  )
}
