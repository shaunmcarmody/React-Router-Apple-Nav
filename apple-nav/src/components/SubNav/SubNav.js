import React from 'react';
import { NavLink } from 'react-router-dom'; 

const SubNav = props => (
    <NavLink to={`/${props.category}/${props.id}`}>
        <article>
            <p>{props.sub.title}</p>
            {
                props.sub.new ? <p className="new">New</p> : null
            }
        </article>
    </NavLink>
)

export default SubNav;
