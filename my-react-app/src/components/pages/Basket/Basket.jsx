import React, { useState } from "react";
import classes from "./Basket.module.css";
import { useParams, Link } from "react-router-dom";
import ProductDetail from "../../BasketComponent/ProductDetail";
import BasketForm from './../../BasketForm/BasketForm';
import Navigation from "../../Navigation/Navigation";

const Basket = () => (
   <div className="pageBody">
     <Navigation />
     <div className={classes.locationForm}>
     <ProductDetail />
      <BasketForm />
     </div>
      {/* <Contact /> */}
    </div>
  );


export default Basket;
