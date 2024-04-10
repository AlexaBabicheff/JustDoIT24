import React, { useState } from "react";
import classes from "./Basket.module.css";
import Navigation from "../../Navigation/Navigation";

import Contact from "../../Contact/Contact";
import ProductCounter from "../../ProductCounter/ProductCounter";
import { useParams, Link } from "react-router-dom";

const Basket = () => {
  const [totalItems, setTotalItems] = useState(0);
  const addToBasket = () => {
    setTotalItems(totalItems + 1);
  };

  return (
    <div className="pageBody">
      <div className={classes.productsContainer}>
        <Navigation />
      </div>
      <div className={classes.calculateItems}>
        <h2>Total items in basket: {totalItems}</h2>
        <ProductCounter onAdd={addToBasket} />
      </div>
    </div>

    // <div>
    //   <h2>Total items in basket: {totalItems}</h2>
    //   <ProductCounter onAdd={addToBasket} />
    // </div>

    // <div className="pageBody">
    //   <Contact />
    // </div>
  );
};

export default Basket;
