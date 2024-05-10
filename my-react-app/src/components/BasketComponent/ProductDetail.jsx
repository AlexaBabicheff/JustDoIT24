import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.css";
import {
  addItemToCart,
  removeItemFromCart,
  increaseItemCount,
  decreaseItemCount,
  updateTotalPrice,
} from "./BasketReducer";
import { serverUrl } from "../../Config";
import BasketForm from "./../BasketForm/BasketForm";

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
    dispatch(increaseItemCount(id));
  };
const decreaseCount = (id) => {
  dispatch(decreaseItemCount(id));
};

const removeItem = (id) => {
  dispatch(removeItemFromCart(id));
};

// суммируем общую цену, используя метод reduce для перебора всех товаров в корзине
// const total = productDetails.reduce((acc, productDetail) => {
//   const item = items.find((item) => parseInt(item.id) === productDetail.id);
//   console.log("total ", item);
//   return (productDetail.price * (item ? item.count : 0)) + acc;
// }, 0);

// обновляем общую цену в хранилище
useEffect(() => {
  const total = productDetails.reduce((acc, productDetail) => {
    const item = items.find((item) => parseInt(item.id) === productDetail[0].id);
    console.log("total ", productDetail);
    console.log("total ", items);
    return (productDetail[0].price * (item ? item.count : 0)) + acc;
  }, 0);
  console.log("total!", total);
  dispatch(updateTotalPrice(total));
});
// , [total, dispatch]

{productDetails.map((productDetail) => {
  const { id, title, price, discont_price, description, image } = productDetail;
  const item = items.find((item) => parseInt(item.id) === id);
  if (!item) return null;
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>${price}</p>
      {discont_price && <p>Discount Price: ${discont_price}</p>}
      <button onClick={() => decreaseCount(id)}>-</button>
      <span>Count: {item.count} items</span>
      <span>Total Price: {productDetail.price * item.count} $</span>
      <button onClick={() => increaseCount(id)}>+</button>
      <button onClick={() => removeItem(id)}>X</button>
    </div>
  );
})}
<div>
  Total: ${items.reduce((acc, curr) => acc + (curr.count * curr.price), 0)}
</div>
return (
  <div>
    <div className={classes.basketNavigation}>
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
    {!items.length ? (
      <div className={classes.productDetailsHeader}>Here is empty</div>
    ) : (
      <div className="productDetailsContainer">
        {productDetails.map((productDetailArray) => {
console.log(productDetailArray[0]);
const { id, title, price, discont_price, description, image } =
productDetailArray[0];
const item = items.find((item) => parseInt(item.id) === id);

console.log(items);
console.log(items.length);
console.log(item);

if (!item) return null;

return (
  <div className={classes.productDetailsContainer}>
    <div className={classes.productDetailsHeader}>
      <div key={id} className={classes.productDetails}>
        {<img src={`${serverUrl}${image}`} alt={title} />}
      </div>
      <div className={classes.productDetailsInfo}>
                  <p>{title}</p>
                  <h4>${price}</h4>
                  <p>Total price: {price*item.count} $</p>
                  {discont_price && <p>Discount Price: ${discont_price}</p>}
                  <div className={classes.ProductCounterContainer}>
                    <button4 onClick={() => decreaseCount(id)}>-</button4>
                    <input
            type="number"
            value={item.count}
            placeholder="1"
            min="1"
            readOnly
          />
          {/* Отображаем количество выбранных товаров */}
          {/* <p>Count: {item.count} items</p> */}

          {/* <BasketForm handleAddUser={handleAddUser} totalItems={items.reduce((acc, curr) => acc + curr.count, 0)} /> */}

                    <button4 onClick={() => increaseCount(id)}>+</button4>
                  </div>
                </div>

                <div className={classes.closeCard}>
                  <button4 onClick={() => removeItem(item.id)}>X</button4>
                </div>
              </div>
            </div>
          );
          // });
        })}
      </div>
    )}
  </div>

   
);
};

export default ProductDetail;


