import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './CartItem.css';

class CartItem extends Component {
    
    render() {
        return (     
            <div>
                <Card className="cart-product-item">
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