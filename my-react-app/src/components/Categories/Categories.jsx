// import React, { useEffect, useState } from "react";
// import classes from "./Categories.module.css";
// import { Link } from "react-router-dom";

// const Categories = () => {
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
//         <div className={classes.line}><hr /></div>
//         <div className={classes.categoriesButton}>
//           <button>
//             <a href="#">All categories</a>
//           </button>
//         </div>
//       </div>
//       <div className={classes.categoriesCardsContainer}>
//         {categories.slice(0, 4).map((category) => (
//           <Link key={category.id} to={`/categories/${category.id}`}>
//           <div
//             key={category.id}
//             className={classes.categoriesCard}
//             style={{ position: "relative", overflow: "hidden" }}
//           >
//             <img
//               src={"http://127.0.0.1:3333" + category.image}
//               alt={category.title}
//             />
//             <div
//             // key={category.id}
//             className={classes.categoriesCardText}
//             style={{ position: "relative", overflow: "hidden" }}
//           >
//             <div className={classes.description}>
//               <div className={classes.title}>{category.title}</div>
//             </div>
//           </div>
//           </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Categories/Categories.module.css";
import { serverUrl } from "../../Config";

const Categories = ({ showAllCategories }) => {
  const [categories, setCategories] = useState([]);

  const categoriesURL = `${serverUrl}categories/all`;
  useEffect(() => {
    fetch(categoriesURL)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={classes.categoriesContainer}>
      {/* <div className="line">
        <hr />
      </div>
      <div className="btns">
        {" "}
        <div className="main_page">
          <button>
            <Link to="/">Main Page</Link>
          </button>
        </div>
        <div className="categories_page">
          <button>Categories</button>
        </div>
      </div> */}
      <div className={classes.categoriesContainerHeader}>
        <div>
          <p>Categories</p>
        </div>
        {!showAllCategories && (
          <>
            {/* <div className={classes.line}>
              <hr />
            </div>
            <div className={classes.categoriesButton}>
              <button>
                <Link to="/categories-review">All categories</Link>
              </button>
            </div> */}
          </>
        )}
      </div>
      <div className={classes.categoriesCardsContainer}>
        {categories
          .slice(0, showAllCategories ? categories.length : 4)
          .map((category) => (
            <Link key={category.id} to={`/categories/${category.id}`}>
              <div
                className={classes.categoriesCard}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <img
                  src={`${serverUrl}` + category.image}
                  alt={category.title}
                />
                <div className={classes.description}>
                  <div className={classes.title}>{category.title}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
