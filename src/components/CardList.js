import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
    display:flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
 `
const ListItem = styled.li`
    font-size: 22px;
    color: black;
`

const Input = styled.input`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    
`

const ListItemText = styled.span`
font-size: 22px;
color: black;
`

const Button = styled.button`
    background: pink;
    width: auto;
    height: 20px;
    color:white;

`
 const CardList = ({ todos, deleteTodo }) => (
    <List> 
        {todos.map((todo, index) => (
        <ListItem key={index.toString()}>
            <Input type="checkbox" tabIndex={-1}></Input>
            <ListItemText>{todo}</ListItemText>
            <Button
            onClick={() => {
              deleteTodo(index);
            }}
            >Delete</Button>
            
        </ListItem>
        ))}
    </List>
    );

 export default CardList;