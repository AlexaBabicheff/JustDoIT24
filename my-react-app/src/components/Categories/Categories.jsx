import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
          <p>Categories</p>
      <div className={`${classes.categoriesCardsContainer} ${(!showAllCategories) ? classes.show4 : ''}`}>
        {categories
          .slice(0, showAllCategories ? categories.length : 4)
          .map((category) => (
            <NavLink key={category.id} to={`/categories/${category.id}`}>
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
            </NavLink>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Categories;
