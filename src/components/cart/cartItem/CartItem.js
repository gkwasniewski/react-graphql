import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'

import './CartItem.css';
import store from '../../../store'

class CartItem extends Component {

    //Remove product from cart
    addToCart = (id) => (e) => {
        store.dispatch({type: 'DELETE_FROM_CART', data: {
            'id': id
            }
        })
    }
    
    render() {
        return (     
            <div>
                <Card className="cart-product-item">
                    <CardContent>
                        <Typography variant="headline" className="cart-product-item__text">
                            {this.props.name}
                        </Typography>
                        <Typography component="h2" className="cart-product-item__text">
                            Price: {this.props.quantity * this.props.price}$
                        </Typography>
                        <Typography component="p" className="cart-product-item__text">
                            Product ID: {this.props.id}
                        </Typography>
                        <Typography component="p" className="cart-product-item__text">
                            Quantity: {this.props.quantity}
                        </Typography>
                        <RemoveShoppingCart onClick={this.addToCart(this.props.id)}className="cart-product-item--delete"/>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default CartItem