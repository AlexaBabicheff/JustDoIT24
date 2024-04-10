// для перехода из страницы категорий на единичную страницу

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./CategoryProducts.module.css";
import { serverUrl } from "../../Config";
import Navigation from "../Navigation/Navigation";
import iconBag from "../../components/Navigation/HeaderImg//icons.png";
import iconHeart from "../../components/Navigation/HeaderImg/heart.svg";
import { NavLink } from "react-router-dom";

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
      <Navigation />
      <div className={classes.btn_products}>
        <div className="line">
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
        </div>
        {/* <div className={classes.btn_products}> */}
        <div className={classes.line__CategoriesToProducts}>
          <hr />
        </div>
        <button3>Products</button3>
      </div>
      <div className={classes.CategoryProductsContainer}>
        <div className={classes.CategoryProductsContainerHeader}>
          {categoryName ? <h1>{categoryName}</h1> : <p>Loading...</p>}
        </div>
        <div className={classes.ProductsContainer}>
          <div className={classes.ProductsContainerCard}>
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/one-product/${product.id}`}
                // className={classes.ProductCard}
              >
                <img className={classes.ProductCard}
                  src={`${serverUrl}/${product.image}`}
                  alt={product.title}
                />
                <div>
                < NavLink to="/favorites"><img className={classes.likedProduct1} src={iconHeart} alt="favorites" /></NavLink>
                </div>
                <div>
                 <NavLink to="/basket"><img className={classes.basketProduct1} src={iconBag} alt="shopping_cart" /></NavLink>
                 </div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryProducts;
