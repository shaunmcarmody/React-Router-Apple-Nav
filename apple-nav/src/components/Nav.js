import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => <NavLink to={props.name.toLowerCase()}>{props.name}</NavLink>