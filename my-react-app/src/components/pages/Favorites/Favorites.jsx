import React from "react";
import HeaderBanner from "../../HeaderBanner/Banner";
import Navigation from "../../Navigation/Navigation";
// import Categories from '../../Categories/Categories';
// import DiscountCard from '../../DiscountCard/Discount';
// import Sale from '../../Sale/Sale';
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import { Link } from "react-router-dom";
// import FavoriteComponent from '../../Favorites/FavoriteComponent';
import FavoritesDetail from "../../Favorites/FavoriteDetail";

const Favorites = () => (
  <div className="pageBody">
    {/* <div className={style}> */}
    <Navigation />
    <div className="container">
     
      <h5>Liked Products</h5>
      <FavoritesDetail />
     
      {/* <Contact />
    <Map /> */}
    </div>
  </div>
);

export default Favorites;
