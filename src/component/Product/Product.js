import React from 'react';
import './Product.css';

const Product = (props) => {
    // const handleAddToCart = props.handleAddToCart;
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <p>By : {seller}</p>
                <h4>${price}</h4>
                <p>Only {stock} left is stock. Order Soon!</p>
                <button className='purchase-btn'>add to cart</button>
            </div>
        </div>
    );
};

export default Product;