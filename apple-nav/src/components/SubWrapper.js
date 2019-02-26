import React from 'react';
import { Route } from 'react-router-dom';
import SubNav from './SubNav';

export default props => (
    <Route
        path={`/${props.title.toLowerCase()}`}
        render={props => <SubNav {...props} />}
    />
)