import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.css";
import BasketForm from "./../BasketForm/BasketForm";
import ProductCounter from './../ProductCounter/ProductCounter';

import {
  addItemToCart,
  removeItemFromCart,
  increaseItemCount,
  decreaseItemCount,
} from "./BasketReducer";
import { serverUrl } from "../../Config";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items } = useSelector(({ basket }) => basket);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      console.log("Fetching product details...");
      const uniqueIds = [...new Set(items.map((item) => item.id))];
      console.log("Unique IDs:", uniqueIds);
      const details = await Promise.all(
        uniqueIds.map(async (id) => {
          try {
            const response = await fetch(`${serverUrl}products/${id}`);
            const data = await response.json();
            console.log("Product detail for ID", id, ":", data);
            return data;
          } catch (error) {
            console.error("Error fetching product details:", error);
            return null;
          }
        })
      );
      console.log("Fetched product details:", details);
      setProductDetails(details.filter((detail) => detail !== null));
    };

    if (items.length > 0) {
      fetchProductDetails();
    }
  }, [items]);

  const addItem = (item, count) => {
    dispatch(addItemToCart({ ...item, count }));
  };

  const increaseCount = (id) => {
    dispatch(increaseCount(id));
  };

  const decreaseCount = (id) => {
    dispatch(decreaseCount(id));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section>
      <div className={classes.basketContainer}>
        <div>
          <h7>Shopping cart</h7>
        </div>
        <div className={classes.line}>
          <hr />
        </div>
        <div className={classes.basketButton}>
          <button>
            <Link to="/all_products">Back to store</Link>
          </button>
        </div>
      </div>

      <div className={classes.basketTable}>
        <div className={classes.basketContent}>
          {!items.length ? (
            <div className={classes.emptyBasket}>
              <h3>Here is empty</h3>
            </div>
          ) : (
            <div className="productDetailsContainer">
              {productDetails.map((productDetailArray) => {
                console.log(productDetailArray[0]);
                const { id, title, price, discont_price, description, image } =
                  productDetailArray[0];
                //  return productDetailArray[0].map(({ id, title, price, discont_price, description, image }) => {
                const item = items.find((item) => parseInt(item.id) === id);

                console.log(items);
                console.log(items.length);
                console.log(item);

                // if (!item) return null;

                return (
                  <div key={id} className="productDetailsHeader">
                    <div key={id} className="productDetails">
                      <div className="pictureProducts">
                        {<img src={`${serverUrl}${image}`} alt={title} />}
                      </div>
                      {/* <p>ID: {id}</p> */}
                      <p>Title: {title}</p>
                      <p>Price: ${price}</p>
                      {discont_price && <p>Discount Price: ${discont_price}</p>}
                      <p>Description: {description}</p>
                      <div>
                        <button2 onClick={() => increaseCount(id)}>+</button2>
                        <p>Count: {item.count}</p>
                        <button2 onClick={() => decreaseCount(id)}>-</button2>
                      </div>
                      <div>
                        <button2 onClick={() => removeItem(item.id)}>X</button2>
                      </div>
                      <div className="check_out">
            </div>
                    </div>
                  </div>
                );
                // });
              })}
            </div>
          )}
        </div>
        <BasketForm />
      </div>
    </section>
  );
};

export default ProductDetail;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import classes from './BasketComponent';
// import './ProductDetail.module.css';
// import Basket from '../pages/Basket/Basket';
// import {
//   addItemToCart,
//   removeItemFromCart,
// } from "./BasketReducer";
// import { serverUrl } from '../../Config';

// const ProductDetail = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const { items } = useSelector(({ basket }) => basket);
//   const [productDetails, setProductDetails] = useState([]);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       console.log("Fetching product details...");
//       const uniqueIds = [...new Set(items.map(item => item.id))];
//       console.log("Unique IDs:", uniqueIds);
//       const details = await Promise.all(uniqueIds.map(async (id) => {
//         try {
//           const response = await fetch(`${serverUrl}products/${id}`);
//           const data = await response.json();
//           console.log("Product detail for ID", id, ":", data);
//           return data;
//         } catch (error) {
//           console.error('Error fetching product details:', error);
//           return null;
//         }
//       }));
//       console.log("Fetched product details:", details);
//       setProductDetails(details.filter(detail => detail !== null));
//     };

//     if (items.length > 0) {
//       fetchProductDetails();
//     }
//   }, [items]);

//   const addItem = (item, count) => {
//     dispatch(addItemToCart({ ...item, count }));
//   };

//   const removeItem = (id) => {
//     dispatch(removeItemFromCart(id));
//   };

//   return (
//     <section>
//       <div className='basketNavigation'>
//         <div><h7>Shopping cart</h7></div>
//         <div className={classes.line}><hr /></div>
//         <div className={classes.basketButton}>
//           <button><Link to="/all_products">Back to store</Link></button>
//         </div>
//       </div>
//       {!items.length ? (
//         <div>Here is empty</div>
//       ) : (
//         <div className="productDetailsContainer">
//           {productDetails.map((productDetail) => {
//             const { id } = productDetail;
//             console.log("Product ID:", id);
//             const item = items.find(item => item.id === id);
//             console.log("Item for ID", id, ":", item);
//             if (!item) return null;

//             const { image, title, count } = productDetail;
//             console.log("Product details for ID", id, ":", productDetail);
//             return (
//               <div key={id} className="productDetails">
//                 <img src={`${serverUrl}/${image}`} alt={title} />
//                 <p>ID: {id}</p>
//                 <p>Count: {count}</p>
//                 <p>Title: {title}</p>
//                 <div><button4 onClick={() => removeItem(item.id)}>X</button4></div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductDetail;
