import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import classes from './Sale.module.css';
import iconBag from "../../components/Navigation/HeaderImg//icons.png";
import iconHeart from "../../components/Navigation/HeaderImg/heart.svg";
import { NavLink } from "react-router-dom";


const Sale = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3333/products/all')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = products.filter(product => product.discont_price !== null);
    const calculateDiscountPercentage = (price, discountPrice) => {
        const discount = price - discountPrice;
        const discountPercentage = Math.round((discount / price) * 100);
        return discountPercentage;
    };

    return (
        <div className={classes.saleContainer__pageBody}>
                <div className={classes.saleContainerHeader}>
                    <div><h7>Sale</h7></div>
                    <div className={classes.line}><hr /></div>
                    <div className={classes.saleButton}>
                    <button><Link to="/all_sales">All sales</Link></button>
                    </div>
                </div>
                <div className={classes.saleCardsContainer}>
    {filteredProducts.slice(0, 4).map(product => (
                <Link key={product.id} to={`/all_sales/`}>
               
                <div className={classes.saleCard} style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={"http://127.0.0.1:3333" + product.image} alt={product.title} />
            <div className={classes.discountLabel}>- { calculateDiscountPercentage(product.price, product.discont_price) }%</div>
            <NavLink to="/favorites"><img className={classes.likedProduct} src={iconHeart} alt="favorites" /></NavLink>
            <NavLink to="/basket"><img className={classes.basketProduct} src={iconBag} alt="shopping_cart" /></NavLink>
            
            <div className={classes.description}>
                <div className={classes.title}>{product.title}</div>
                <div className={classes.priceInfo}>
                    <div className={classes.price}>${product.price}</div>
                    <div className={classes.dicountPrice}>${product.discont_price}</div>
                </div>
            </div>
        </div>
               
        </Link>
    ))}
</div>
        </div>
    );
}
export default Sale;

