import React, { useState } from "react";
import classes from "./Basket.module.css";
import Navigation from "../../Navigation/Navigation";

// import Contact from "../../Contact/Contact";
// import ProductCounter from "../../ProductCounter/ProductCounter";
import { useParams, Link } from "react-router-dom";
import OneProduct from "../OneProduct/OneProduct";
import ProductDetail from "../../BasketComponent/ProductDetail";

const Basket = () => (
   <div className="pageBody">
    <Navigation />
      <ProductDetail />
      {/* <Contact /> */}
    </div>
  );


export default Basket;