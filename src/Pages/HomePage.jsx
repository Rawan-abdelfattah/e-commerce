import React from 'react'
import MainSlider from '../components/MainSlider/MainSlider'
import CategorySlider from '../components/CategorySlider/CategorySlider'
import Products from '../Products/Products'
import Footer from '../components/Footer/Footer'

export default function HomePage() {
  return (
    <>
    <MainSlider/>
    <CategorySlider/>
    <Products/>
    <Footer/>
    </>
  )
}
