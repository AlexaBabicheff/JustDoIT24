import React from 'react';
import OneProductComponent from '../../OneProductComponent/OneProductComponent';
import Navigation from "../../Navigation/Navigation";
import classes from './OneProduct.module.css';
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";

const OneProduct = () => (
  <div className={classes.pageBody}>  
  <Navigation /> 
    <OneProductComponent />
    <div className={classes.oneProduct_contactComponent}>
   <Contact />
   </div>
   <div className={classes.map_component}>
    <Map />
    </div>
   </div>
);

export default OneProduct;