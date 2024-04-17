import React, { useEffect, useState } from "react";
import Navigation from "../../Navigation/Navigation";
import classes from "./AllProducts.module.css";
import { useParams} from "react-router-dom";
import { serverUrl } from "../../../Config";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import { NavLink } from "react-router-dom";
import PanelComponent from "../../SortingFilteringPanel/components/PanelComponent";


const AllProducts = () => {
  // const { all } = useParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // const [showDiscounted, setShowDiscounted] = useState(false);

  const allProductsURL = `${serverUrl}products/all`;
  useEffect(() => {
    fetch(allProductsURL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Ошибка загрузки данных о продуктах:", error)
      );
  }, []);

  
  // const openProductDetails = (product) => {};

  const getFilteredAndSortedProducts = () => {
    let sortedProducts = [...products];

    if (sort === "price_asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts.filter(
      (product) =>
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!filter || product.category === filter)
    );
  };

  return (
    <div className="pageBody">
      <div className={classes.productsContainer}>
        <Navigation />
        <div className="container">
          <div className="line">
            <hr />
          </div>
          <div className="btns">
            {" "}
            <div className="main_page">
              <button>Main Page</button>
            </div>
            <div className="all_products_page">
              <button>All products</button>
            </div>
          </div>
          <h5>All products</h5>
          <PanelComponent />
          {/* <div className={classes.allFilters}>
            {/* Минимальная цена: */}
            {/* <div className={classes.filter}>
              <label>Price </label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="from"
              /> */}
              {/* Максимальная цена: */}
              {/* <label> </label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="to"
              /> */}
              {/* Чек-бокс Discount */}
              {/* <label className={classes.discountCheckbox}>
                <a
                  href={"/all_sales"}
                  onClick={() => setShowDiscounted(!showDiscounted)}
                >
                  Discounted Items
                </a>
                <input
                  type="checkbox"
                  checked={showDiscounted}
                  onChange={() => setShowDiscounted(!showDiscounted)}
                />
              </label> */}

              {/* <div className={classes.productSort}> */}
              {/* <div className={classes.productSort}>
                Sorted
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="">by default</option> */}
                  {/* цена по возрастанию */}
                  {/* <option value="price_asc">price ascending</option> */}
                  {/* цена по убыванию */}
                  {/* <option value="price_desc">price descending</option>
                </select>
              </div>
            </div>
          </div>  */}
          {/* <div className={classes.allProductsCardsContainer}>
            {getFilteredAndSortedProducts().map((product) => (
              <NavLink
                key={product.id}
                to={`/one-product/${product.id}`}>
                <img className={classes.productImage}
                  src={`${serverUrl}/${product.image}`}
                  alt={product.title}
                />
                 {/* < NavLink to="/favorites"><img className={classes.likedProduct} src={iconHeart} alt="favorites" /></NavLink> */}
                {/* <img id="white_heart" className={classes.likedProduct} src={whiteHeart} alt="favorites" />
                <NavLink to="/basket"><img className={classes.basketProduct} src={iconBag} alt="shopping_cart" /></NavLink>

                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
              </NavLink>
            ))}
             </div> */} 
          <div className={classes.contact_map}>
            <Contact />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
