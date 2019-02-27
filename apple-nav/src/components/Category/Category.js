import React from 'react';
import { Route } from 'react-router-dom';
import SubWrapper from '../SubWrapper/SubWrapper';
import Main from '../Main/Main';

const Category = props => (
    <>
        <SubWrapper
            subcategories={props.category.subcategories}
            category={props.category.route}
        />
        {
            props.category.subcategories.map((subcategory, i) => (
                <Route
                    exact
                    path={`/${props.category.route}/${i}`}
                    key={i}
                    render={() => <Main title={subcategory.title} />}
                />
            ))
        }
    </>
)

export default Category;