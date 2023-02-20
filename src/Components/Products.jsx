import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductsSlice";
import { addToCart } from "../redux/cartslice";

// import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  const Product = useSelector((state) => state.Products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="container mt-5 pt-5">
        <h1 className=" text-center my-5">All Products</h1>
        <div className="row g-5">
          {Product.map((item) => (
            <div key={item.id} className=" col-lg-4 col-md-6">
        <div className="cards mb-3">
          <div className="card-img mx-auto">
            <img src={item.image} alt={item.title}/>
          </div>
          <div className="card-body">
            <h5 className=" fs-6">{item.title.slice(0,25)}</h5>
            <p className=" fs-5" >{item.description.slice(0,25)}</p>
            <p className="price">{item.price}$</p>
          </div>
          <button onClick={()=>dispatch(addToCart(item))} className=" btn btn-primary d-block w-75 mx-auto my-3"
          >Add to Cart
          </button>
        </div>
      </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
