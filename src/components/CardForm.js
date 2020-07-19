import React, {useState} from 'react';
import styled from 'styled-components';

const WrapCard = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 150px;
`

const Form = styled.form`
    width: 400px;
    height: 200px;
    padding: 50px;
    border-radius: 16px;
    background: #F9F9F9;
    filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.15));
`
const Input = styled.input`
    width: auto;
    height: 18px;
    margin-right: 10px;
    
`
const CardForm = ({saveTodo}) => {        
    const [value, setValue] = useState('');
    return (
        <WrapCard>
            <Form onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        setValue('');
      }}>
                    <Input 
                    type="text" 
                    variant="outlined"
                    placeholder="Add todo"
                    margin="normal"
                    onChange={(event) => {
                      setValue(event.target.value);
                    }}
                    value={value}
                    ></Input>
            </Form>
        </WrapCard>
    )
}

export default CardForm;