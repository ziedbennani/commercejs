import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ prod, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={prod.media.source} title={prod.name} />
            
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {prod.name}
                    </Typography>
                    <Typography variant='h5' >
                        {prod.price.formatted_with_symbol} 
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: prod.description }} variant='body2' color='textSecondary' />
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(prod.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
