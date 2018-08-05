import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

  render() {
    console.log(this.props)
    return   (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React GraphQL
            </Typography>
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
