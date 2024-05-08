import React, { useState } from 'react';
import Navigation from "../../Navigation/Navigation";
import classes from './OneProduct.module.css';
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import ProductCounter from '../../ProductCounter/ProductCounter';
import OneProductComponent from '../../OneProductComponent/OneProductComponent.jsx';

const OneProduct = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productData) => {
    console.log("Added to cart:", productData);
    setCart([...cart, productData]);
  };

  return (
     <div className="pageBody">  
     <div className={classes.navi}>
        <Navigation /> </div>
        <div
         className={classes.oneProducts}>
        <OneProductComponent />
        </div>
        {/* <div className={classes.OneProductContainer}> */}
        {/* <ProductCounter addToCart={addToCart} /> */}
      {/* </div> */}
      {/* <div className={classes.oneProduct_contactComponent}> */}
        {/* <Contact /> */}
      {/* </div> */}
      {/* <div className={classes.map_component}>*/}
        {/*<Map />*/}
      {/*</div> */}
    </div>
  );
};

export default OneProduct;