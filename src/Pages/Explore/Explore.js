import React, { useEffect, useState } from 'react';
import './Explore.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [products, setProducts] = useState([]);


    //load data
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    })    
    return (
        <div className="products-container">
            {
                products.map((pd) => (
                <div className="product">
                    <Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                        <Card.Img className="pt-3" variant="top" src={pd.image}/>
                        <Card.Body>
                            <h3>{pd.name}</h3>
                            <p>{pd.description}</p>
                            <h4>Cost: {pd.price}</h4>
                            <Link to={`/purchase/${pd._id}`}><Button className="text-dark mt-3" variant="outline-info">Purchase</Button>{' '}</Link>
                        </Card.Body>
                    </Card> 
                </div>
                ))
            }
        </div>
    );
};

export default Explore;