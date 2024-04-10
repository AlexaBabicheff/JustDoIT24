import React, { useState } from 'react';
import classes from './ProductCounter.module.css';

const ProductCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={classes.pageBody}>
    <div className={classes.ProductCounterContainer}>
      <button4 onClick={decrement}>-</button4>
      <input type="number" value={count} placeholder='1' min="1" readOnly />
      <button4 onClick={increment}>+</button4>
    </div>
    </div>
  );
};

export default ProductCounter;