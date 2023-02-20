import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/cartslice';
import "./footer.css"
const Footer = () => {
  const Cart = useSelector((state) => state.Cart);
  const dispatch=useDispatch()
  const totalPrice = Cart.reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);



  return (
    <footer className=' mt-5'>
    <hr />
       <div className="cart-total">
        <h4>Total</h4>
        <span>${totalPrice.toFixed(2)}</span>
       </div>
       <div  className="text-center mt-3">
       <button onClick={()=>dispatch(clearCart())} className=' btn btn-success'>Clear Cart</button>
       </div>
    </footer>
  )
}

export default Footer;