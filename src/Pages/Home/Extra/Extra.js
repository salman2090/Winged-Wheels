import React from 'react';
import './Extra.css';
import extra from '../../../images/Choose/choose.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';

const Extra = () => {
        // icon info    
        const timeIcon = <FontAwesomeIcon icon={faClock} />
        const priceIcon = <FontAwesomeIcon icon={faMoneyBillWave} />

    return (
        <div >
            <h2 className="my-5 fw-bold ">Why Choose Us</h2>
            <div className="extras-container ">
            <div>
                <img className=" h-75 img-fluid mt-2" src={extra} alt="" />
            </div>
            <div className="extra-container">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    p:1,
                    width: 350,
                    height: 230
                    },
                }}
                >
    
                <Paper elevation={3}>
                <h5 className="fw-bold fs-4 mt-5 mb-3"><span className="text-danger">{priceIcon}</span> {' '}&emsp;Affordable Price</h5>
                    <Typography >We provide our products in an affordable price range ensuring best in quality.</Typography>
                </Paper>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    p:1,
                    width: 350,
                    height: 200,
                    },
                }}
                >
    
                <Paper elevation={3} >
                <h5 className="fw-bold fs-4 mt-5 mb-3"><span className="text-danger">{timeIcon}</span> {' '}&emsp;Fast Services</h5>
                    <p >Our top priority is to ensure our customer's service even aftersale of our product.</p>
                </Paper>

            </Box>

            </div>
            </div>
        </div>
    );
};

export default Extra;