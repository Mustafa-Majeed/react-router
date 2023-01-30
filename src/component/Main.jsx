import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div >
      <Navbar/>
      <Hero />
      <div className=' text-dark d-flex justify-content-center w-25 m-auto mt-5 mb-5'>
        <Link to="Products" className='display-5'>
         Our Products
        </Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
