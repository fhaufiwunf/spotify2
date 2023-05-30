import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Login from "./Todo/Login";




function App() {

  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} >home</Route>
    //   <Route path="/shop" element={<ShopPage />} >shop</Route>
    //   <Route path="/login" element={<LoginPage />} >login</Route>
    //   <Route path="/cart" element={<CartPage />} >cart</Route>


    // </Routes>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/All" element={<Login/>}></Route>
      <Route path="/active" element={<Login/>}></Route>
      <Route path="/completed" element={<Login/>}></Route>
      
    </Routes>


  );
}

export default App