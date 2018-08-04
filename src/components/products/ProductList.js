import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import Product from "./Product";
import './ProductList.css';

const GQL_QUERY = gql`{
    products: allProducts(count: 25) {
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
        }
    }

    onSort = (column, dataToSort) => (e) => {     
        if (column === 'productName') {
            this.setState({data: _.orderBy(dataToSort, ['name'], ['asc'])})
        } else {
            this.setState({data: _.orderBy(dataToSort, ['price'], ['asc'])})
        }
    };

    render() {
        return (
            <Query query={GQL_QUERY}>
                {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>
                
                let productsToRender = this.state.data;

                if(this.state.data.length === 0 ) {
                    productsToRender = data.products;
                }
               
                return (
                    <Paper className="container">
                        <Table className="product-list-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell onClick={this.onSort('productName', productsToRender)}>
                                        Product Name
                                    </TableCell>
                                    <TableCell onClick={this.onSort('productPrice', productsToRender)}>
                                        Product Price
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {productsToRender.map(product => {
                                return(
                                    <TableRow key={product.id} className="product-row">
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        {/* <td>{product.id}</td> */}
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