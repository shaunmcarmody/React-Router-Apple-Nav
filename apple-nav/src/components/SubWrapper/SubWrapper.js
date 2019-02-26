import React from 'react';
import SubNav from '../SubNav/SubNav';
import './SubWrapper.sass';

const SubWrapper = props => (
    <section>
        <div className="container">
            {
                props.category.subcategories.map((sub, i) => <SubNav sub={sub} key={i} />)
            }
        </div>
    </section>
)

export default SubWrapper;