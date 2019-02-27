import React from 'react';
import Nav from '../Nav/Nav';
import './NavWrapper.sass';

const NavWrapper = props => (
  <header>
    <nav>
      {
        props.categories.map(category => (
          <Nav
            product={category}
            key={category.id}
          />
        ))
      }
    </nav>
  </header>
)

export default NavWrapper;