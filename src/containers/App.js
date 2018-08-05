import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import store from '../store'
import { connect } from "react-redux";
import './App.css';
import ProductList from '../components/products/ProductList'
import Cart from '../components/cart/Cart'

class App extends Component {
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
          <ProductList/>
          <Cart products={this.props.count}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count // (1)
  }
};

export const AppContainer = connect(mapStateToProps)(App);
