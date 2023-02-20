import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
