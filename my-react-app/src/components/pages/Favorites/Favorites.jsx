import React from "react";
import Navigation from "../../Navigation/Navigation";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
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
