import React from 'react'
import MainSlider from '../components/MainSlider/MainSlider'
import CategorySlider from '../components/CategorySlider/CategorySlider'
import Products from '../Products/Products'

export default function HomePage() {

  return (
    <>
    <div className="container-fluid">
       <MainSlider/>
    <CategorySlider/>
    <Products/>
    </div>
   
   
    </>
  )
}
