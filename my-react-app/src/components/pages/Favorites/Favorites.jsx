import React from 'react';
// import HeaderBanner from '../../HeaderBanner/Banner';
// import Navigation from '../../Navigation/Navigation';
// import Categories from '../../Categories/Categories';
// import DiscountCard from '../../DiscountCard/Discount';
// import Sale from '../../Sale/Sale';
// import Contact from '../../Contact/Contact';
// import Map from '../../Map/Map';
import { Link } from "react-router-dom";
import FavoritesDetail from '../../Favorites/FavoriteDetail';

const Favorites = () => (
  <div className="pageBody">
    {/* <div className={style}> */}
    {/* <Navigation /> */}
    <FavoritesDetail />
    {/* <HeaderBanner />
    <Categories />
    <DiscountCard /> */}
    {/* <Sale /> */}
    {/* <Contact />
    <Map /> */}
  </div>
);

export default Favorites;