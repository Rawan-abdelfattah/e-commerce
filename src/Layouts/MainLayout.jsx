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
   <div className=' pt-5 mt-4 d-flex flex-column' style={{ minHeight: '100vh' }}>
      <Navbar UserData={UserData} logout={logout} />
      
      <div className='flex-grow-1'>
        <Outlet />
      </div>

     <Footer/>
    </div>
    </>
  )
}
