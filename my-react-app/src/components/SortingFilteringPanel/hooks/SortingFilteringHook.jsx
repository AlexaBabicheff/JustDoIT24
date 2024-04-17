import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCheckboxValue } from '../action';

const useSortingFilteringHook = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [myArray, setMyArray] = useState([]);
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [sortByPrice, setSortByPrice] = useState('default');
    const dispatch = useDispatch();
    const [hasDiscount, setDiscount] = useState(false);

    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:3333/products/all');
        const data = await response.json();
        setMyArray(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleToggleDiscount = () => {
        const isChecked = hasDiscount.current.checked;
        console.log(hasDiscount);
        console.log(isChecked);
        dispatch(setCheckboxValue(isChecked));
        setFilteredData([]);
    };

    const filterDiscount = (item) => {
        //console.log(hasDiscount);
        if (hasDiscount) {
             return item.discont_price !== null;
        }
        return true;
    };

    const filterByPrice = (item) => {
        if (priceFrom && priceTo) {
            return item.price >= parseFloat(priceFrom) && item.price <= parseFloat(priceTo);
        }
        return true;
    };

    const sortItems = (a, b) => {
        if (sortByPrice === "default") return 0;
        if (sortByPrice === "max-price") return b.price - a.price;
        return a.price - b.price;
    };

    return {
        filteredData: myArray.filter(filterDiscount).filter(filterByPrice).sort(sortItems),
        priceFrom,
        setPriceFrom,
        priceTo,
        setPriceTo,
        sortByPrice,
        setSortByPrice,
        hasDiscount,
        setDiscount,
        handleToggleDiscount,
    };
};

export default useSortingFilteringHook;