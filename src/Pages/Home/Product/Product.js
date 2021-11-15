import React from 'react';
import './Product.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    const {_id, name, image, description, price } = product;
    return (
        <div >
            <div className="product-container">
            <Card border="light" className="card-body mx-3 mt-3 shadow p-3 mb-5 bg-body rounded-3" >
                <Card.Img className="pt-3 mb-3" variant="top" src={image}/>
                <Card.Body>
                    <h2 className="fs-4 pb-2 fw-bold">{name}</h2>
                    <p>{description}</p>
                    <h3>Cost: {price}</h3>
                    <Link to={`/purchase/${_id}`}><Button className="text-dark mt-3" variant="outline-info">Order Now</Button>{' '}</Link>
                </Card.Body>
            </Card> 
            </div>

            
        </div>
    );
};

export default Product;