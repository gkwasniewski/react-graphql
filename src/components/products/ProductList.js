import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/icons/AddCircleOutline'
import Loader from 'react-loader-spinner'

import store from '../../store'
import './ProductList.css';

//GraphQL query 
const GQL_QUERY = gql`{
    products: allProducts(count: 100) {
        id
        name
        price
    }
  }
`

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    //Sort products list by name and price
    onSort = (column, dataToSort) => (e) => {     
        if (column === 'productName') {
            this.setState({data: _.orderBy(dataToSort, ['name'], ['asc'])})
        } else {
            this.setState({data: _.orderBy(dataToSort, (o) => {
                return parseFloat(o.price)
            })})
        }
    };

    //Add item to cart
    addToCart = (product) => (e) => {
        store.dispatch({type: 'ADD_TO_CART', data: {
            'id': product.id, 
            'name': product.name, 
            'price': product.price
            }
        })
    }

    render() {
        return (
            //Fetch GraphQL Data
            <Query query={GQL_QUERY}>
                {({ loading, error, data }) => {

                if (loading) {
                    return ( 
                        <div className="product-list__loader">
                            <Loader type="TailSpin" color="#3f51b5" height={80} width={80}/>
                        </div>
                    )
                }

                if (error) {
                    return <div>Error</div>
                }
                
                let productsToRender = this.state.data;

                if (this.state.data.length === 0) {
                    productsToRender = data.products;
                }
               
                return (
                    <Paper className="container">
                        <Table className="product-list-table">
                            <TableHead className="product-list-table__head">
                                <TableRow>
                                    <TableCell onClick={this.onSort('productName', productsToRender)} className="product-list-table__head__title">
                                        Product Name
                                    </TableCell>
                                    <TableCell onClick={this.onSort('productPrice', productsToRender)} className="product-list-table__head__title">
                                        Product Price
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {productsToRender.map(product => {
                                return(
                                    <TableRow key={product.id} className="product-row" hover>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell><Icon onClick={this.addToCart(product)} color="action" hover></Icon></TableCell>
                                    </TableRow>
                                )
                            })}
                            </TableBody>
                        </Table>
                    </Paper>
                )
            }}
         </Query>
        )
    }
}

export default ProductList