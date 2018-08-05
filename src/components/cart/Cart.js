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

        //Render single cart item
        const productItem = this.props.products.map((element, index) => {
            return <CartItem id={element.id} name={element.name} price={element.price} key={element.id} quantity={element.quantity}></CartItem>
        });

        //Sum products
        const sumProductsPrice = _.sumBy(this.props.products, (o) => { return parseFloat(o.quantity*o.price); })
        const sumTotalItems = _.sumBy(this.props.products, (o) => { return parseFloat(o.quantity); })

        return (     
            <div>
                <Paper className="cart-container">{productItem}</Paper>
                <Paper className="cart-total">
                    <p>Total items: {sumTotalItems}</p>
                    <p>Total price: {sumProductsPrice}</p>
                </Paper>
            </div>
        )
    }
}

export default Cart