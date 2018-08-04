import React, { Component } from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
class Product extends Component {
  render() {
    return (
        <TableCell>
          {this.props.product.name} ({this.props.product.price})
        </TableCell>
    )
  }
}

export default Product