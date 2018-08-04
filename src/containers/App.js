import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';
import ProductList from '../components/products/ProductList'
import Cart from '../components/cart/Cart'

class App extends Component {
  render() {
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
          <ProductList/>
          <Cart/>
        </div>
      </div>
    )
  }
}

export default App;
