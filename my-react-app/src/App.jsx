// DIPLOY
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
import UsersPage from './components/pages/UsersPage'


import BurgerMenu from './components/pages/BurgerMenu/BurgerMenu';

import OneProduct from './components/pages/OneProduct/OneProduct';
import NotFound from './components/pages/NotFound/NotFound';

import BasketForm from './components/BasketForm/BasketForm';
import BreadCrumbs from './components/BreadCrumbs/ButtonsCategories'
import Categories from './components/Categories/Categories';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import OneProductComponent from './components/OneProductComponent/OneProductComponent';
import FiltersPanel from './components/Filter/FiltersPanel';
import ProductCounter from './components/ProductCounter/ProductCounter';
import PanelComponent from './components/SortingFilteringPanel/components/PanelComponent';
import ProductDetail from './components/BasketComponent/ProductDetail';
import FavoriteDetail from './components/Favorites/FavoriteDetail';
import FavoriteButton from './components/Favorites/FavoriteButton';
import ThemeSwitcher from './components/ThemeSwitcher/components/ThemeSwitcher';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/theme_switcher" element={<ThemeSwitcher />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/basket-form" element={<BasketForm />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
          <Route path="/bread-crumbs" element={<BreadCrumbs />} />
          <Route path="/filters-panel" element={<FiltersPanel />} />
          <Route path="/categories-goods" element={<CategoriesGoods />} />
          <Route path="/categories-review" element={<CategoriesReview />} />
          <Route path="/all_sales" element={<AllSales />} />
          <Route path="/all_products" element={<AllProducts />} />
          <Route path="/one-product-component/:id" element={<OneProductComponent />} />
          <Route path="/one-product/:id" element={<OneProduct />} />
          <Route path="/product-counter" element={<ProductCounter />} />
          {/* <Route path="/categories/:categoryId" element={<CategoryProducts />} /> */}
          <Route path="/categories/:categoryId" element={<CategoriesGoods />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/panel-component" element={<PanelComponent />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/favorite-detail" element={<FavoriteDetail />} />
          <Route path="/favorite-button" element={<FavoriteButton />} /> 
          <Route path="*" element={<NotFound />} />
          <Route path="/users-page" element={<UsersPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;