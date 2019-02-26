import React from 'react';
import SubNav from './SubNav';
import './SubWrapper.sass';

const SubWrapper = props => (
    <section>
        <div class="container">
            {
                props.category.subcategories.map((sub, i) => <SubNav sub={sub} key={i} />)
            }
        </div>
    </section>
)

export default SubWrapper;