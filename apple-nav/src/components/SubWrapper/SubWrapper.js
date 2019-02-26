import React from 'react';
import SubNav from '../SubNav/SubNav';
import './SubWrapper.sass';

const SubWrapper = props => (
    <div className="header">
        <div className="container">
            {
                props.subcategories.map((sub, i) => (
                    <SubNav
                        sub={sub}
                        key={i}
                        category={props.category}
                        id={i}
                    />
                ))
            }
        </div>
    </div>
)

export default SubWrapper;