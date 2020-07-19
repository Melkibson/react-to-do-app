import React, {useState} from 'react';
import styled from 'styled-components';
const WrapCard = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 150px;

    @media (max-width: 768px){
        padding: 0 30px;
    };
`;

const Form = styled.form`
    width: 100%;
    padding: 25px;
    border-radius: 16px;
    background: #F9F9F9;
    filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.15));
`;
const Input = styled.input`
    width: auto;
    border: 0;
    font-size: 22px;
    margin-right: 10px;
    background: transparent;
    outline: none;

    &:placeholder{
        color: darkgray;
    }
`;
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
            placeholder="Press enter to add task"
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