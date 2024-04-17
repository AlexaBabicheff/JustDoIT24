import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import classes from './BasketComponent';
import './ProductDetail.module.css';
import Basket from './../pages/Basket/Basket';
import {
  addItemToCart,
  removeItemFromCart,
} from "./BasketReducer";
import { serverUrl } from '../../Config';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items } = useSelector(({ basket }) => basket);
  const [productDetails, setProductDetails] = useState([]);


  useEffect(() => {
    const fetchProductDetails = async () => {
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
      fetchProductDetails();
    }
  }, [items]);

  const addItem = (item, count) => {
    dispatch(addItemToCart({ ...item, count }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
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
            const { id, image, title, count } = productDetail;
            const item = items.find(item => item.id === id);
            if (!item) return null;
            return (
              <div key={id} className="productDetails">
                <img src={`${serverUrl}/${image}`} alt={title} />
                <p>ID: {id}</p>
                <p>Count: {count}</p>
                <p>Title: {title}</p>
                <div><button onClick={() => removeItemFromCart(item.id)}>X</button></div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProductDetail;