import React, { Fragment } from 'react';
import CommonStyle from './theme/CommonStyle';
import Header from './components/Header';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import useTodoState from './components/useTodoState';

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);


  return (
    <Fragment>
        <CommonStyle />
        <Header />
        <CardForm 
        saveTodo={todoText=>{
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}/>
        <CardList todos={todos} deleteTodo={deleteTodo} />
    </Fragment>
    
    
  );
};

export default App;
