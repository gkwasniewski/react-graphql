import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import './Cart.css';
import CartItem from './cartItem/CartItem';

class Cart extends Component {
    
    render() {
        console.log(this.props.products)
        
        const productItem = this.props.products.map(element => {
            return <CartItem id={element.id} name={element.name} price={element.price} key={element.id}></CartItem>
        });

        return (     
            <div>
                <Paper className="cart-container">{productItem}</Paper>
            </div>
        )
    }
}

export default Cart