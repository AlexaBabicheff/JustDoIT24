// page Categories

// import Categories from "../../Categories/Categories";
// import CategoriesLink from "../../CategoriesLink/CategoriesLink";
// import Navigation from "../../Navigation/Navigation";
// import Contact from "../../Contact/Contact";
// import Map from "../../Map/Map";

// const CategoriesGoods = () => {
//   return (
//     <div className="pageBody">
//       <Navigation />
//       <div className="container">
//       <div className="line"><hr />
//       </div>
//       <div className="btns">
//         <div className="main_page">
//           <button>Main Page</button>
//         </div>
//         <div className="categories_page">
//           <button>Categories</button>
//         </div>
//       </div>
//       <div className="categories_component">
//       <CategoriesLink />
        
//       </div>
      
//       <div className="contact_component">
//         <Contact />
//       </div>
//       <div className="map_component">
//         <Map />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesGoods;


// Alesja


import Navigation from "../../Navigation/Navigation";
// import FiltersPanel from "../../Filter/FiltersPanel";
// import CategoryProducts from "../../CategoryProducts/CategoryProducts";
// import Section from "../../Section/Section";
// import Map from "../../Map/Map";
// import Mind_map from "../../Min_map/Mind_map";

const CategoriesGoods = () => {
  return (
    <div className="CategoriesGoodsContainer">
      <Navigation />
      {/* <FiltersPanel /> */}
      {/* <CategoryProducts />
      <Section />
      <Map /> */}
    </div>
  );
};

export default CategoriesGoods;