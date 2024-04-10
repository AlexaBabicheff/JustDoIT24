// отображение чекбокса Дисконт с кнопкой подробнее о карточках товара
import React, { useState, useEffect } from 'react';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showDisconted, setShowDisconted] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/products/all")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Ошибка загрузки данных о продуктах:", error)
      );
  }, []);

  const openProductDetails = (product) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`

          ${product.title}
          ${product.description}
          Price: $${product.price}

    `);
    newWindow.document.close();
  };

  const getFilteredSortedProducts = () => {
    let sortedProducts = [...products];

    if (sort === "price_asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    const filteredProducts = sortedProducts.filter((product) => (
      (!minPrice || product.price >= minPrice) && 
      (!maxPrice || product.price <= maxPrice) &&
      (!showDisconted || product.discont_price !== null)
    ));

    return filteredProducts.map((product) => (
      <div key={product.id}>
        <p>{product.title}</p>
        <p>Price: ${product.price}</p>
        <p>Discont Price: {product.discont_price}</p>
        <button onClick={() => openProductDetails(product)}>Подробнее</button>
      </div>
    ));
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showDisconted}
          onChange={() => setShowDisconted(!showDisconted)}
        />
        {showDisconted ? "Show All Products" : "Show Disconted Only"}
      </label>

      {getFilteredSortedProducts()}

    </>
  );
};

export default AllProducts;