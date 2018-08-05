import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Cart.css';
import CartItem from './cartItem/CartItem';

class Cart extends Component {
    
    render() {

        const productItem = this.props.products.map(element => {
            return <CartItem id={element.id} name={element.name} price={element.price} key={element.id}></CartItem>
        });

        const sumProductsPrice = _.sumBy(this.props.products, (o) => { return parseFloat(o.price); })

        return (     
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper className="cart-container">{productItem}</Paper>
                <Paper className="cart-total">
                    <p>Total items: {this.props.products.length}</p>
                    <p>Total price: {sumProductsPrice}</p>
                </Paper>
            </div>
        )
    }
}

export default Cart