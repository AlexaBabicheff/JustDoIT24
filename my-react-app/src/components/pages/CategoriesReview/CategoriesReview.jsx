// page Categories

// import Navigation from "../../Navigation/Navigation";
// import Categories from "../../Categories/Categories";
// import Section from "../../Section/Section";
// import Map from "../../Map/Map";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./CategoriesReview.module.css";



// const CategoriesReview = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategoryClick = async (categoryId) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:3333/categories/${categoryId}`);
//       const data = await response.json();
//       console.log(data);
//       setSelectedCategory(data);
//       navigate.push('/categories-goods/' + categoryId); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="pageBody">
//       <Navigation />
//       <Categories
//         showAllCategories={true}
//         isHidden={false}
//         onCategoryClick={handleCategoryClick}
//       />
//       <Section selectedCategory={selectedCategory} />
//       <Map />
//     </div>
//   );
// };

// export default CategoriesReview;

// Page Categories

import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from "./CategoriesReview.module.css";
import ButtonsCategories from "../../ButtonsCategories/ButtonsCategories";
// import Mind_map from "../../Min_map/Mind_map";

const CategoriesReview = () => {
  return (
    <div className="pageBody">
      <div className={classes.productsContainer}>
      <Navigation />
      {/* <ButtonsCategories /> */}
      <Categories showAllCategories={true} />
      <div className={classes.contact_map}>
      <Contact />
      <Map />
      </div>
    </div>
    </div>
  );
};

export default CategoriesReview;