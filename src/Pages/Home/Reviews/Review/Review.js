import { CardContent, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({review}) => {
    const {name, description, rating} = review;
    return (
            <Box>
                <Card sx={{ minWidth: 250, border:0, boxShadow:0, m:1 }}>
                <CardContent>

                <Typography variant="h6" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2 " color="text.secondary">
                    {description}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <Rating name="read-only" value={rating} readOnly />
                    </Typography>
                </CardContent>

                </Card>
            </Box>
    );
};

export default Review;