import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => <NavLink to={`/${props.product.route}`}>{props.product.title}</NavLink>

export default Nav;