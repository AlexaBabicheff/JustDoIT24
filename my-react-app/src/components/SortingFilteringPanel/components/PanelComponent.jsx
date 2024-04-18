import React from 'react';
import useSortingFilteringHook from '../hooks/SortingFilteringHook';

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
        <div>
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
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PanelComponent;