import React from 'react';
import { useSelector } from 'react-redux';
import { removeItemFromFavorites } from './FavoriteReducer'; 

const FavoriteComponent = () => {
  const items = useSelector(state => state.favorites.items); 

  return (
    <div>
      <h2>Favorites</h2>
      <div className="product-list">
        {items.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.img} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.count}</p>
            </div>
            <button onClick={() => removeItemFromFavorites(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteComponent;