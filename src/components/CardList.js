import React from 'react';
import styled from 'styled-components';

const iconPath = process.env.PUBLIC_URL + '/assets/img/toad.svg';

const WrapList = styled.div`
    margin-top: 50px;
    width: 100%;
    margin: 20px auto 0;
    padding: 0 150px;

    @media (max-width: 768px){
        padding: 0 30px;
    };
`
const List = styled.ul`
    border-radius: 16px;
    filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.15));
 `
const ListItem = styled.li`
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:rgb(94, 0, 175);
    font-size: 22px;
    color: white;
    padding: 25px;
    &:not(:last-child){
        margin-bottom: 20px;
    }
    &:before{
        content:'';
        display: inline-block;
        width: 30px;
        height: 30px;
        background:url(${iconPath}) no-repeat 0 0;
        background-size: 100%;
        margin-right: 20px;
        
    }
`
const ListItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ListItemText = styled.span`
font-size: 22px;
color: white;
word-break: break-word;
@media (max-width: 768px){
    margin-bottom: 20px;
}
`

const Button = styled.a`
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid white;
    background: transparent;
    color: white;
    padding: 6px 12px;
    transition: all 0.5s ease;
    &:hover {
        background: white;
        color:rgb(94, 0, 175);
        border: 2px solid rgb(94, 0, 175);
    }
`


 const CardList = ({ todos, deleteTodo }) => (
     <WrapList>
        <List> 
            {todos.map((todo, index) => (
            <ListItem key={index.toString()}>
                <ListItemContainer>
                    <ListItemText>{todo}</ListItemText>
                    <Button
                    onClick={() => {
                    deleteTodo(index);
                    }}
                    >Delete
                    </Button>
                </ListItemContainer>
            </ListItem>
            ))}
        </List>
    </WrapList>
    );

 export default CardList;