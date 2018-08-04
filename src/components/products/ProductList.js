import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import Product from "./Product";

const GQL_QUERY = gql`{
    products: allProducts(count: 25) {
        id
        name
        price
    }
  }
`

class ProductList extends Component {
  render() {
    return (
        <Query query={GQL_QUERY}>
         {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const productsToRender = data.products;
    
          return (
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product ID</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell numeric>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                         {productsToRender.map(product => {
                             return(
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                </TableRow>
                                )
                            })};
                        </TableBody>
                    </Table>
                </Paper>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ProductList