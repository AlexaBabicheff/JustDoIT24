import React, { useState } from "react";
import classes from "./Basket.module.css";
// import Navigation from "../../Navigation/Navigation";

// import Contact from "../../Contact/Contact";
// import ProductCounter from "../../ProductCounter/ProductCounter";
import { useParams, Link } from "react-router-dom";
import OneProduct from "../OneProduct/OneProduct";

const Basket = () => {
  

return (
    <div className="pageBody">
      <OneProduct />
      {/* <Contact /> */}
    </div>
  );
};

export default Basket;
