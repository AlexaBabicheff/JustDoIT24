import React from 'react';
import HeaderBanner from '../../HeaderBanner/Banner';
import Navigation from '../../Navigation/Navigation';
// import Categories from '../../Categories/Categories';
// import DiscountCard from '../../DiscountCard/Discount';
// import Sale from '../../Sale/Sale';
import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';
import { Link } from "react-router-dom";

const Favorites = () => (
  <div className="pageBody">
    {/* <div className={style}> */}
    <Navigation />
    <div className="container">
      <div className="line">
        <hr />
      </div>
      <div className="btns">
        <div className="main_page">
          <button><Link to="/">Main Page</Link></button>
        </div>
        <div className="categories_page">
          <button>Liked Products</button>
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