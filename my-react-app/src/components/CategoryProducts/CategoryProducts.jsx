// для перехода из страницы категорий на единичную страницу

import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import classes from "./CategoryProducts.module.css";
import { serverUrl } from "../../Config";
import Navigation from "../Navigation/Navigation";
import whiteBag from "../../components/Navigation/HeaderImg/bag_white.png";
import greenHeart from "../../components/Navigation/HeaderImg/heart_green.png";
import whiteHeart from "../../components/Navigation/HeaderImg/heart_white.png";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState(null);

  const categoryProductsURL = `${serverUrl}categories/${categoryId}`;

  useEffect(() => {
    fetch(categoryProductsURL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error(error));

    const categoriesAllURL = `${serverUrl}categories/all`;
    fetch(categoriesAllURL)
      .then((response) => response.json())
      .then((data) => {
        const category = data.find((c) => c.id === parseInt(categoryId));
        if (category) {
          setCategoryName(category.title);
        } else {
          setCategoryName("Category Not Found");
        }
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div className={classes.pageBody}>
      <div className={classes.StructureContainer}>
      
        {/* BreadCrumbs */}
        <div className={classes.btn_products}>
          <div className={classes.btns}>
            <div className={classes.btn_mainPage}>
              <button>
                <NavLink to="/">Main Page</NavLink>
              </button>
            </div>
            <div className={classes.line__MinePageToCategories}>
              <hr />
            </div>
            <div className={classes.btn_categories}>
              <div className={classes.line__CategoriesToProducts}>
                <hr />
              </div>
              <button>
                <NavLink to="/categories-review">Categories</NavLink>
              </button>
            </div>
            <div className={classes.btn_products}>
              <button>
                <NavLink to="/categories/">Products</NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={classes.CategoryProductsContainer}>
          <div className={classes.CategoryProductsContainerHeader}>
            {categoryName ? <h1>{categoryName}</h1> : <p>Loading...</p>}
          </div>
          <div className={classes.ProductsContainer}>
            <div className={classes.ProductsContainerCard}>
              {products.map((product) => (
                <NavLink
                  key={product.id}
                  to={`/one-product/${product.id}`}
                  className={classes.ProductCard}
                >
                  <img
                    className={classes.ProductCard}
                    src={`${serverUrl}/${product.image}`}
                    alt={product.title}
                  />
                  <div>
                    <img
                      className={classes.likedProduct1}
                      src={whiteHeart}
                      alt="favorites"
                    />
                  </div>
                  <div>
                    <NavLink to="/basket">
                      <img
                        className={classes.basketProduct1}
                        src={whiteBag}
                        alt="shopping_cart"
                      />
                    </NavLink>
                  </div>
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryProducts;
