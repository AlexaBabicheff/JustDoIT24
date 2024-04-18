import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import classes from './FavoriteDetail.module.css';

import {
  addItemToFavorites,
  removeItemFromFavorites,
} from "./FavoriteReducer";
import { serverUrl } from '../../Config';
import Favorites from './../pages/Favorites/Favorites';

const FavoritesDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items } = useSelector(({ favorites }) => favorites); 
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchFavoritesDetails = async () => {
      console.log("Fetching product details...");
      const uniqueIds = [...new Set(items.map(item => item.id))];
      console.log("Unique IDs:", uniqueIds);
      const details = await Promise.all(uniqueIds.map(async (id) => {
        try {
          const response = await fetch(`${serverUrl}products/${id}`); 
          const data = await response.json();
          console.log("Product detail for ID", id, ":", data);
          return data;
        } catch (error) {
          console.error('Error fetching product details:', error);
          return null;
        }
      }));
      console.log("Fetched product details:", details);
      setProductDetails(details.filter(detail => detail !== null));
    };
  
    if (items.length > 0) {
      fetchFavoritesDetails();
    }
  }, [items]);

  const addItem = (item, count) => {
    dispatch(addItemToFavorites({ ...item, count })); 
  };

  const removeItem = (id) => {
    dispatch(removeItemFromFavorites(id)); 
  };

  return (
    <section>
      <div className='basketNavigation'>
        <div><h7>Shopping cart</h7></div>
        <div className={classes.line}><hr /></div>
        <div className={classes.basketButton}>
          <button><Link to="/all_products">Back to store</Link></button>
        </div>
      </div>
      {!items.length ? (
        <div>Here is empty</div>
      ) : (
        <div className="productDetailsContainer">
        {productDetails.map((productDetail) => { 
          const { id, title, price, discount_price, description, image } = productDetail;

          const item = items.find(item => parseInt(item.id) === id);

          if (!item) return null;

          return (
            <div key={id} className="productDetails">
              <img src={`${serverUrl}${image}`} alt={title} />
              <p>ID: {id}</p>
              <p>Title: {title}</p>
              <p>Price: ${price}</p>
              {discount_price && <p>Discount Price: ${discount_price}</p>}
              <p>Description: {description}</p>
              <div>
                  <button onClick={() => addItem(item, 1)}>картинка `сердечко`</button>
                  <button onClick={() => removeItem(id)}>Remove from Favorites</button> 
              </div>  
            </div>
          );
        })}
      </div>
    )}
  </section>
);
};

export default FavoritesDetail;