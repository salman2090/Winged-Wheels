import React from 'react';
import banner from '../../../images/Banner/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img src={banner} className="mb-5 w-100  img-fluid" alt="" />
        </div>
    );
};

export default Banner;