import React from 'react';
import { useSelector } from 'react-redux';
import { removeItemFromCart } from './BasketReducer';

const BasketComponent = () => {
  const items = useSelector(state => state.cart.items); // Получаем товары из Redux хранилища

  return (
    <div>
      <h2>Cart</h2>
      <div className="product-list">
        {items.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.img} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: {item.price} </p>
              <p>Quantity: {item.count}</p>
            </div>
            <button onClick={() => removeItemFromCart(item.id)}>Remove from favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasketComponent;