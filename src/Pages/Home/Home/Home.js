import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;