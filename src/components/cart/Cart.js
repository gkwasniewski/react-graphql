import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import './Cart.css';
import CartItem from './cartItem/CartItem';

class Cart extends Component {
    
    render() {

        let productItem = <div></div>

        if (this.props.products !== undefined) {
            productItem = <CartItem id={this.props.products.id} name={this.props.products.name} price={this.props.products.price}></CartItem>
        }

        return (     
            <div>
                <Paper className="cart-container">{productItem}</Paper>
            </div>
        )
    }
}

export default Cart