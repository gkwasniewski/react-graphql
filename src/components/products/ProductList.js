import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import ArrowUp from '@material-ui/icons/KeyboardArrowUp'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Loader from 'react-loader-spinner'
import TextField from '@material-ui/core/TextField';

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
            data: [],
            quantity: '',
            sortedNamesBy: '',
            sortedPriceBy: ''
        }
    }

    //Sort products list by name and price
    onSort = (column, dataToSort) => (e) => {  
        if (column === 'productName') {
            if(this.state.sortedNamesBy === 'asc') {
                this.setState({data: _.orderBy(dataToSort, ['name'], ['desc']), sortedNamesBy: 'desc'})
            } else {
                this.setState({data: _.orderBy(dataToSort, ['name'], ['asc']), sortedNamesBy: 'asc'})
            }  
        } else {
            if(this.state.sortedPriceBy === 'desc') {
                this.setState({data: _.orderBy(dataToSort, (o) => {
                    return parseFloat(o.price)
                }), sortedPriceBy: 'asc'})
            } else {
                this.setState({data: _.orderBy(dataToSort, (o) => {
                    return parseFloat(o.price)
                }).reverse(), sortedPriceBy: 'desc'})
            }
        }
    };

    //Handle quantity field change
    handleChange = (e) => {
        this.setState({quantity: e.currentTarget.value})
    }

    //Add item to cart
    addToCart = (product) => (e) => {
        if (this.state.quantity <= 0) {
            return
        } else {
            store.dispatch({type: 'ADD_TO_CART', data: {
                'id': product.id, 
                'name': product.name, 
                'price': product.price,
                'quantity': parseFloat(this.state.quantity)
                }
            })
        }
    }

    render() {
        return (
            //Fetch GraphQL Data
            <Query query={GQL_QUERY}>
                {({ loading, error, data }) => {
                
                //Loading component
                if (loading) {
                    return ( 
                        <div className="product-list__loader">
                            <Loader type="TailSpin" color="#009688" height={80} width={80}/>
                        </div>
                    )
                }

                //Error handler
                if (error) {
                    return <div>Error</div>
                }
                
                //Save results to variable
                let productsToRender = this.state.data;

                if (this.state.data.length === 0) {
                    productsToRender = data.products;
                }

                //Sorting icon
                let sortingByPriceIcon;
                let sortingByNameIcon

                if(this.state.sortedNamesBy === 'asc') {
                    sortingByNameIcon = <ArrowUp className="sorting-icon"></ArrowUp>
                } else {
                    sortingByNameIcon = <ArrowDown className="sorting-icon"></ArrowDown>
                }

                if(this.state.sortedPriceBy === 'asc') {
                    sortingByPriceIcon = <ArrowUp className="sorting-icon"></ArrowUp>
                } else {
                    sortingByPriceIcon = <ArrowDown className="sorting-icon"></ArrowDown>
                }
               
               
                return (
                    <Paper className="container">
                        <Table className="product-list-table">
                            <TableHead className="product-list-table__head">
                                <TableRow>
                                    <TableCell onClick={this.onSort('productName', productsToRender)} className="product-list-table__head__title">
                                        Product Name
                                        {sortingByNameIcon}
                                    </TableCell>
                                    <TableCell onClick={this.onSort('productPrice', productsToRender)} className="product-list-table__head__title">
                                        Product Price $
                                        {sortingByPriceIcon}
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
                                        <TableCell>
                                            <TextField
                                                onChange={this.handleChange}
                                                id="number"
                                                label="Quantity"
                                                type="number"
                                                margin="normal"
                                                className="product-list-item--quantity"
                                            />
                                            <AddShoppingCart onClick={this.addToCart(product, this.props.quantity)} color="action" className="product-list-item--add-to-cart"></AddShoppingCart>
                                        </TableCell>
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