import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 3rem;
    margin-top: 100px;
    text-align: center;
`;

const Main = props => (
    <main>
        <Header>{props.title} Route</Header>
    </main>
)

export default Main