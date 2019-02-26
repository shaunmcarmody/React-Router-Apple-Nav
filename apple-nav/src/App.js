import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import './App.css';
import data from './data';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.setState({
      categories: data
    })
  }

  render() {
    return (
      <Route
        path="/"
        component={props => <NavWrapper {...props} categories={this.state.categories} />}
      />
    )
  }
}
