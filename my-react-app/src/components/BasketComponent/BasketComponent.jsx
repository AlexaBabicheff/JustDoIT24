import React from 'react';
import { useSelector } from 'react-redux';

const BasketComponent = () => {
  const items = useSelector(state => state.cart.items); // Получаем товары из Redux хранилища

  return (
    <div>
      <h2>Shopping Basket</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketComponent;