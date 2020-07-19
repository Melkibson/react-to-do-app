import React from 'react';
import styled from 'styled-components';

const AppHeader = styled.header`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const Title = styled.h1`
    font-family: 'Karla';
    font-size: 54px;
    font-weight: bold;
    color: rgb(94, 0, 175)
`

const WrapHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center
    margin: 0 auto;
    padding : 0 150px;

    @media (max-width: 768px){
        padding: 0 30px;
    };
`
function Header(){
    return (
        <AppHeader>
            <WrapHeader>
                <Title>My tasks</Title>
            </WrapHeader>   
        </AppHeader>
    )
}

export default Header;