// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import classes from "../CategoriesLink/CategoriesLink.module.css";

// const Categories = ({ showAllCategories }) => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:3333/categories/all")
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className={classes.categoriesContainer}>
//       <div className={classes.categoriesContainerHeader}>
//         <div>
//           <p>Categories</p>
//         </div>
//         {!showAllCategories && (
//           <>
        
//           </>
//         )}
//       </div>
//       <div className={classes.categoriesCardsContainer}>
//         {categories.map((category) => (
//           <Link key={category.id} to={`/categories/${category.id}`}>
//             <div
//               className={classes.categoriesCard}
//               style={{ position: "relative", overflow: "hidden" }}
//             >
//               <img src={"http://127.0.0.1:3333" + category.image} alt={category.title} />
//               <div className={classes.description}>
//                 <div className={classes.title}>{category.title}</div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;



    {/* <div className={classes.line}><hr /></div>
            <div className={classes.categoriesButton}>
              <button><Link to="/categories-review">All categories</Link></button>
            </div> */}