import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import SubWrapper from './components/SubWrapper';
import data from './data';

class App extends Component {
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
      <>
        <NavWrapper
          categories={this.state.categories}
        />
        {
          this.state.categories.map(category => (
            <Route
                path={`/${category.route}`}
                render={ props => <SubWrapper {...props} category={category} /> }
                key={category.id}
            />
          ))
        }
      </>

    )
  }
}

export default App;
