// здесь делаю адаптив

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/MainPage/MainPage';
import CategoriesGoods from './components/pages/CategoriesGood/CategoriesGoods';
import CategoriesReview from './components/pages/CategoriesReview/CategoriesReview';
import AllProducts from './components/pages/AllProducts/AllProducts';
import AllSales from './components/pages/AllSales/AllSales';

import Favorites from './components/pages/Favorites/Favorites';
import Basket from './components/pages/Basket/Basket';
import BurgerMenu from './components/pages/BurgerMenu/BurgerMenu';

import OneProduct from './components/pages/OneProduct/OneProduct';
import NotFound from './components/pages/NotFound/NotFound';


import ButtonsCategories from './components/ButtonsCategories/ButtonsCategories'
import Categories from './components/Categories/Categories';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import OneProductComponent from './components/OneProductComponent/OneProductComponent';
import FiltersPanel from './components/Filter/FiltersPanel';
import ProductCounter from './components/ProductCounter/ProductCounter';


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
          <Route path="/buttons-categories" element={<ButtonsCategories />} />
          <Route path='/filters-panel' element={<FiltersPanel />} />
          <Route path="/categories-goods" element={<CategoriesGoods />} />
          <Route path="/categories-review" element={<CategoriesReview />} />
          <Route path="/all_sales" element={<AllSales />} />
          <Route path="/all_products" element={<AllProducts />} />
          <Route path="/one-product-component/:id" element={<OneProductComponent />} />
          <Route path="/one-product/:id" element={<OneProduct />} />
          <Route path="/product-counter" element={<ProductCounter />} />
          <Route path="/categories/:categoryId" element={<CategoryProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;