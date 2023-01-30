import { Outlet ,Link } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'
function Products() {
  return (
    <>
    <Navbar/>
    <div className='d-flex justify-content-center align-items-center flex-column container'>
      <h1>veiw our products</h1>
      <div className='d-flex justify-content-center align-items-center'>

      <Link to="Clothes" className='btn btn-primary'>Clothes</Link>
      &nbsp;
      <Link to="Sneakers" className='btn btn-warning'>Sneakers</Link>
      &nbsp;
      <Link to="More" className='btn btn-danger'>More</Link>
      &nbsp;
      </div>
      <br />
      <Outlet/>
      <br />
      <Link to="/" className='btn btn-primary'>back to Home</Link>
    </div>
    </>
  )
}

export default Products