import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { connect } from "react-redux";
import store from '../store'

import './App.css';
import ProductList from '../components/products/ProductList'
import Cart from '../components/cart/Cart'

class App extends Component {

  constructor() {
    super()
    store.subscribe(() => {
      console.log(store.getState())
    })
  }

  //Filter product list
  filterProducts = (e) => {
    console.log(e.currentTarget.value)
    store.dispatch({type: 'SEARCH_PRODUCTS', data: {
        'name': e.currentTarget.value, 
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <AppBar position="static" className="app-header">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React GraphQL
            </Typography>
            <TextField
              id="search"
              label="Search products"
              fullWidth
              className="search-input"
              onChange={this.filterProducts}
            />
          </Toolbar>
        </AppBar>
        <div className="app-container">
          <ProductList />
          <Cart products={this.props.data}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export const AppContainer = connect(mapStateToProps)(App);
