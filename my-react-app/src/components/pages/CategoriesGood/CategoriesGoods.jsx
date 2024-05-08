import React from "react";
import Navigation from "../../Navigation/Navigation";
import FiltersPanel from "../../Filter/FiltersPanel";
import CategoryProducts from "../../CategoryProducts/CategoryProducts";
import Section from "../../Section/Section";
import Map from "../../Map/Map";
import Contact from "../../Contact/Contact";

// import Mind_map from "../../Min_map/Mind_map";

const CategoriesGoods = () => {
  return (
    <div className="CategoriesGoodsContainer">
      <Navigation />
      {/* <FiltersPanel /> */}
      <CategoryProducts />
      <Contact /> 
      <Map />
    </div>
  );
};

export default CategoriesGoods;