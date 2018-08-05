import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

class CartItem extends Component {
    
    render() {
        return (     
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="headline">
                            {this.props.name}
                        </Typography>
                        <Typography component="h2">
                            Price: {this.props.price}
                        </Typography>
                        <Typography component="p">
                            Product ID: {this.props.id}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default CartItem