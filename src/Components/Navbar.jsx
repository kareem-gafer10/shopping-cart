import React,{useEffect} from 'react'
import {BsCartPlusFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux';
import "./Navbar.css"


const Navbar = () => {

  const cart = useSelector((state)=> state.Cart)
 

  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">Shopping Cart</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex :align-items-center">
          <li className="nav-item me-5 fs-5">
            <Link className="nav-link active" aria-current="page" to="/">Products</Link>
          </li>
          <li className="nav-item position-relative">
            <Link className="nav-link" to="/cart">
            
            <BsCartPlusFill size={30} color="white"/>
            <div className="cart-icon position-absolute ">
            <div className='d-flex justify-content-center align-items-center'>
            <p className=' text-white'>{cart.length}</p>
            </div>
            </div>
            </Link>
          </li> 
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
