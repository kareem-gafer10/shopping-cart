import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/cartslice";
import Footer from "./Footer";

const Cart = () => {
  const Cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 pt-5">
      <h1 className=" text-center my-5">Your Cart</h1>
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Img</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title.slice(0,15)}</td>
              <td>
                <img
                  style={{ width: "50px" }}
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>{product.price}$</td>
              <td>
                <button onClick={()=> dispatch(deleteFromCart(product))}
                 className=" btn btn-sm btn-danger">Delete</button>
              </td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
};

export default Cart;
