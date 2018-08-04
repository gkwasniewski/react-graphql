import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

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
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={this.onSort('productName', productsToRender)}>
                                        Product Name
                                    </th>
                                    <th onClick={this.onSort('productPrice', productsToRender)}>
                                        Product Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {productsToRender.map(product => {
                                return(
                                    <tr key={product.id} className="product-row">
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.id}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            }}
         </Query>
        )
    }
}

export default ProductList