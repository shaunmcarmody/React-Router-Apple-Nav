import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => <Link to={`/${props.name.toLowerCase()}`}>{props.name}</Link>

export default Nav;