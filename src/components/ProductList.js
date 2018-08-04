import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Table, { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

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
                <TableBody>
                    {productsToRender.map(product => <Product key={product.id} product={product} />)}
                </TableBody>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ProductList