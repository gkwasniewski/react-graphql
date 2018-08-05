import React, { Component } from 'react'
import _ from 'lodash';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

import './Cart.css';
import CartItem from './cartItem/CartItem';

class Cart extends Component {
    
    render() {
        console.log(this.props.products)
        let productItem = <div></div>

        if (this.props.products != undefined) {
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