import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);


    //load data
    useEffect(() => {
        fetch("https://guarded-chamber-73024.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)))
    })    
    return (
        <div id="products">
            <h2 className="fw-bold mt-5">Checkout Our Products</h2>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>
                        
                    )
                }
            </div>  
        </div>
    );
};

export default Products;