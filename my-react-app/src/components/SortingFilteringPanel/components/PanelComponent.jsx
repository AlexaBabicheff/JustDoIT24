import React, {useState} from 'react';
import useSortingFilteringHook from '../hooks/SortingFilteringHook';
import classes from './PanelComponent.module.css';
import { serverUrl } from "../../../Config";
import { NavLink } from "react-router-dom";
import whiteBag from "../../Navigation/HeaderImg/bag_white.png";
import greenHeart from "../../Navigation/HeaderImg/heart_green.png";
import whiteHeart from "../../Navigation/HeaderImg/heart_white.png";
import IconLike from "../../IconLike/IconLike";

function PanelComponent() {
    const {
        filteredData,
        priceFrom,
        setPriceFrom,
        priceTo,
        setPriceTo,
        sortByPrice,
        setSortByPrice,
        hasDiscount,
        setDiscount
        // handleToggleDiscount
    } = useSortingFilteringHook();

    return (
        <div className="pageBody">
            <div>
                <label>Price from: </label>
                <input type="number" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} />
                <label>to: </label>
                <input type="number" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
            </div>
            <div className='checkbox'>
            <label><input type="checkbox" value={hasDiscount} onChange={(e) => setDiscount(e.target.checked)} />Discounted items</label>
            </div>
            <div>
                <div className='price_sorting'>
                    <label>Sort by: </label>
                    <select value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="max-price">Max Price</option>
                        <option value="min-price">Min Price</option>
                    </select>
                </div>
            </div>
            <div className={classes.allProductsCardsContainer}>
                {filteredData.map(item => (
                    <NavLink key={item.id} to={`/one-product/${item.id}`} className={classes.productImage}>
                        <img 
                  src={`${serverUrl}/${item.image}`}
                  alt={item.title}
                />
                <img id="white_heart" className={classes.likedProduct} src={whiteHeart} alt="favorites" />              
                 {/* <IconLike /> */}
                 <NavLink to="/basket"><img className={classes.basketProduct} src={whiteBag} alt="shopping_cart" /></NavLink>
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default PanelComponent;

// import React from 'react';
// import useSortingFilteringHook from '../hooks/SortingFilteringHook';

// function PanelComponent() {
//     const {
//         filteredData,
//         priceFrom,
//         setPriceFrom,
//         priceTo,
//         setPriceTo,
//         sortByPrice,
//         setSortByPrice,
//         hasDiscount,
//         setDiscount
//         // handleToggleDiscount
//     } = useSortingFilteringHook();

//     return (
//         <div>
//             <div>
//                 <label>Price from: </label>
//                 <input type="number" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} />
//                 <label>to: </label>
//                 <input type="number" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
//             </div>
//             <div className='checkbox'>
//                 <label><input type="checkbox" value={hasDiscount} onChange={(e) => setDiscount(e.target.checked)} />Discounted items</label>
//             </div>
//             <div>
//                 <div className='price_sorting'>
//                     <label>Sort by: </label>
//                     <select value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
//                         <option value="default">Default</option>
//                         <option value="max-price">Max Price</option>
//                         <option value="min-price">Min Price</option>
//                     </select>
//                 </div>
//             </div>
//             <ul>
//                 {filteredData.map(item => (
//                     <li key={item.id}>
//                         <h3>{item.title}</h3>
//                         <p>Price: ${item.price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default PanelComponent;