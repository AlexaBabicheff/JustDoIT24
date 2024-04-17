import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import classes from './ProductCounter.module.css';
import Basket from '../pages/Basket/Basket';

const ProductCounter = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add2cart = () => {
    console.log("adding", id, "*", count);

  };

  return (
    <div className={classes.pageBody}>
    <div className={classes.ProductCounterContainer}>
      <button4 onClick={decrement}>-</button4>
      <input type="number" value={count} placeholder='1' min="1" readOnly />
      <button4 onClick={increment}>+</button4>
      <Link to="/basket"><button alt="basket" onClick={add2cart}>Add to cart</button></Link>
    </div>
    </div>
  );
};

export default ProductCounter;