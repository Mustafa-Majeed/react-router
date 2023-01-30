import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand text-warning" to="/" style={{ "fontSize": "30px" }}> <b> Mustafa</b> <b class="text-danger">Khan</b></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</ Link>
              </li>
              <li class="nav-item dropdown ">
                <Link class="nav-link dropdown-toggle text-light" to="Products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </Link>
                <ul class="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item text-light" to="Products/Clothes">Clothes</Link></li>
                  <li><hr class="dropdown-divider text-light" /></li>
                  <li><Link class="dropdown-item text-light" to="Products/Sneakers">Sneakers</Link></li>
                  <li><hr class="dropdown-divider text-light" /></li>
                  <li><Link class="dropdown-item text-light" to="Products/More">More</Link></li>
                </ul>                
              </li>
              <li class="nav-item">
                  <Link class="nav-link text-light" to="Contact">Contact</Link>
                </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar