import React, { useState, useEffect } from 'react';
import classes from './ProductCounter.module.css';

const ProductCounter = ({ product, itemCount, setItemCount, addToCart }) => {
  const [count, setCount] = useState(0);
  const { title, price, image } = product || {}; // Деструктуривация ппо умолчанию в случае отсутствия product
  const serverUrl = 'http://127.0.0.1:3333/';

  const handleAddToCart = () => {
    const productData = {
      image: image,
      name: title,
      count: itemCount,
      price: price,
    };
    addToCart(productData);
  };

  const increment = () => {
    setItemCount(itemCount + 1);
  };

  const decrement = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div>
      <div className={classes.OneProductImg}>
        <img src={serverUrl + '/' + image} alt={title} />
      </div>
      <div>Product Title: {title}</div>
      <div>Product Price: ${price}</div>
      <div>Quantity: {itemCount}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCounter;