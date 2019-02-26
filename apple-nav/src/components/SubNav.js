import React from 'react';

const SubNav = props => (
    <article>
        <div class="title">
            <p>{props.sub.title}</p>
            {
                props.sub.new ? <p className="new">New</p> : null
            }
        </div>
    </article>
)

export default SubNav;
