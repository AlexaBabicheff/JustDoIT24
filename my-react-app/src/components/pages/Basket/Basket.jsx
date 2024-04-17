import React, { useState } from "react";
import classes from "./Basket.module.css";
import { useParams, Link } from "react-router-dom";
import ProductDetail from "../../BasketComponent/ProductDetail";

const Basket = () => (
   <div className="pageBody">
      <ProductDetail />
      {/* <Contact /> */}
    </div>
  );


export default Basket;
