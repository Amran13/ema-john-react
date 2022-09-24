import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summery</h1>
                <h3>Item Ordered : </h3>
            </div>
        </div>
    );
};

export default Shop;