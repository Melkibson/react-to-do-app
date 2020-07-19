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
    font-size: 44px;
    color: white
`

const WrapHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center
    margin: 0 auto;
    padding : 0 150px
`
function Header(){
    return (
        <AppHeader>
            <WrapHeader>
                <Title>To do</Title>
            </WrapHeader>   
        </AppHeader>
    )
}

export default Header;