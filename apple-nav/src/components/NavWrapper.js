import React from 'react';
import Nav from './Nav';

const NavWrapper = props => (
  <>
    {
      props.categories.map(category => (
        <Nav
          name={category.title.toLowerCase()}
          key={category.id}
        />
      ))
    }
  </>
)

export default NavWrapper;