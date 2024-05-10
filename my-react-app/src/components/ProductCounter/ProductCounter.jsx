import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./ProductCounter.module.css";
import Basket from "../pages/Basket/Basket";
import { addItemToCart } from "../BasketComponent/BasketReducer.jsx";

const ProductCounter = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add2cart = () => {
    console.log(product);
    console.log("adding", id, "*", count);
    let price = 0;
    const item = { id, count, price };
    dispatch(addItemToCart(item));
  };

  return (
    <main>
      <div className={classes.ProductTotalContainer}>
        <div className={classes.ProductCounterContainer}>
          <button4 onClick={decrement}>-</button4>
          <input type="number" value={count} placeholder="1" min="1" readOnly />
          <button4 onClick={increment}>+</button4>
        </div>
        <Link to="/basket">
          <button alt="basket" onClick={add2cart}>
            Add to cart
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ProductCounter;

// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import classes from "./ProductCounter.module.css";
// import Basket from "../pages/Basket/Basket";
// import { addItemToCart } from "../BasketComponent/BasketReducer.jsx";

// const ProductCounter = () => {
//   const [product, setProduct] = useState(null);
//   const [count, setCount] = useState(1);
//   const { id } = useParams();

//   const dispatch = useDispatch();

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const add2cart = () => {
//     console.log(product);
//     console.log("adding", id, "*", count);
//     let price = 0;
//     const item = { id, count, price };
//     dispatch(addItemToCart(item));
//   };

//   return (
//     <main>
//       <div className={classes.ProductTotalContainer}>
//         <div className={classes.ProductCounterContainer}>
//           <button4 onClick={decrement}>-</button4>
//           <input type="number" value={count} placeholder="1" min="1" readOnly />
//           <button4 onClick={increment}>+</button4>
//         </div>
//         <Link to="/basket">
//           <button alt="basket" onClick={add2cart}>
//             Add to cart
//           </button>
//         </Link>
//       </div>
//     </main>
//   );
// };

// export default ProductCounter;

