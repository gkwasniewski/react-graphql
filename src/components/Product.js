import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.product.name} ({this.props.product.price})
        </div>
      </div>
    )
  }
}

export default Product