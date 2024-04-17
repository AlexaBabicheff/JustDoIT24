import React from 'react';
import HeaderBanner from '../../HeaderBanner/Banner';
import Navigation from '../../Navigation/Navigation';
// import Categories from '../../Categories/Categories';
// import DiscountCard from '../../DiscountCard/Discount';
// import Sale from '../../Sale/Sale';
import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';
import { NavLink } from "react-router-dom";

import classes from "./Favorites.module.css";

const Favorites = () => (
  <div className="pageBody">
    {/* <div className={style}> */}
    <Navigation />
    <div className={classes.container_favorites}>
      <div className={classes.line_favorites}>
        <hr />
      </div>
      <div className="btns">
        <div className="main_page">
          <button><NavLink to="/">Main Page</NavLink></button>
        </div>
        <div className="categories_page">
          <button>Favorites</button>
        </div>
      </div>
      <h5>Liked Products</h5>
    
    {/* <HeaderBanner />
    <Categories />
    <DiscountCard /> */}
    {/* <Sale /> */}
    {/* <Contact />
    <Map /> */}
  </div>
  </div>
);

export default Favorites;