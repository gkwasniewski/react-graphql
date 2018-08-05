import React, { Component } from 'react'
import _ from 'lodash';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

import './Cart.css';

class Cart extends Component {
    
    render() {
        console.log(this.props)
        return (     
            <div>
                <Paper className="cart-container">TEST</Paper>
                {/* <h1>{props.count}</h1> */}
            </div>

        )
    }
}

export default Cart