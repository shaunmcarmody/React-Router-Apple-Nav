import React from 'react';
import SubWrapper from './SubWrapper';
import Nav from './Nav';

export default props => (
    <nav>
      {
        props.categories.map(category => (
          <Nav
            name={category.title}
            key={category.id}
          />
        ))
      }
      {
        props.categories.map(category => <SubWrapper {... category} />)
      }
    </nav>
)