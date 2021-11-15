import React from 'react';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Extra></Extra>
        </div>
    );
};

export default Home;