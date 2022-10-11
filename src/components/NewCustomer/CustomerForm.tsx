import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5rem;


`;

const Form = styled.form`
    background-color: #50808E;
    padding: 1rem;
    margin: 1rem auto;
    color: white;
    gap: 1rem;
    border-radius: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-height: 40rem;
    @media (min-width: 580px) {
    width: 20rem;    
    }
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;


    
`;

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`;

const Label = styled.label`
    
`;
const Input = styled.input`
    font: inherit;
    padding: 0.5rem;
    border-radius: 2px;
    border: 1px solid #ccc;
    width: 18rem;
    max-width: 100%;
    outline: none !important;
    :focus {
        border: 1px solid #69a297;
    }

`;


export const CustomerForm = () => {
  return (
    <>
        <Form>
            <Title>Customer Purchases</Title>
                <InputWrapper>
                    <InputField>
                        <Label>First Name</Label>
                            <Input type="text" />
                    </InputField>
                    <InputField>
                        <Label>Last Name</Label>
                            <Input type="text" />
                    </InputField>
                    <InputField>
                        <Label>Item</Label>
                            <Input type="text" />
                    </InputField>
                    <InputField>
                        <Label>Amount</Label>
                            <Input type="number" min="10" step="1" />
                    </InputField>
                    <InputField>
                        <Label>Purchase Date</Label>
                            <Input type="date" min="2019-01-01" max="2022-12-31" />
                    </InputField>
                </InputWrapper>
        </Form>
    </>
  )
}
