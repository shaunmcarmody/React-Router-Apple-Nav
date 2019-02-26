import React from 'react';
import SubNav from './SubNav';

const SubWrapper = props => props.category.subcategories.map((sub, i) => <SubNav sub={sub} key={i} />)

export default SubWrapper;