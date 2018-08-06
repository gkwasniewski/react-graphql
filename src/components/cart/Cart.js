import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import AttachMoney from '@material-ui/icons/AttachMoney'
import _ from 'lodash';

import './Cart.css';
import CartItem from './cartItem/CartItem';

class Cart extends Component {
    
    render() {
        //Render single cart item
        let productItem;

        if(this.props.products.length === 0) {
            productItem = <div className="cart-empty">Cart is empty</div>
        } else {
            productItem = this.props.products.map((element, index) => {
                return <CartItem id={element.id} name={element.name} price={element.price} key={element.id} quantity={element.quantity}></CartItem>
            });
        }

        //Sum products
        const sumProductsPrice = _.sumBy(this.props.products, (o) => { return parseFloat(o.quantity*o.price); })
        const sumTotalItems = _.sumBy(this.props.products, (o) => { return parseFloat(o.quantity); })

        return (     
            <div>
                <Paper className="cart-container">{productItem}</Paper>
                <Paper className="cart-total">
                    <ShoppingCart className="cart-total-items__icon"/>
                    <p>Total items: {sumTotalItems}</p>
                    <AttachMoney className="cart-total-price__icon"/>
                    <p>Total price: {sumProductsPrice}$</p>
                </Paper>
            </div>
        )
    }
}

export default Cart