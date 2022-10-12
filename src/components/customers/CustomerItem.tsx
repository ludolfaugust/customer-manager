import React from 'react';
import { ICustomer } from '../types/customer';
import styled from 'styled-components';
import { PurchaseDate } from './PurchaseDate';


const CustomerItemWrapper = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.25rem;
    justify-content: space-between;
    align-items:center;
    background-color:#69a297 ;
    padding: 0.5rem;
    gap; 1rem;
    margin: 1rem 0;
    
`;

const FirstName = styled.div `
    
 display: flex;
 width: 20%;
 gap: 1rem;
 padding-right: 1rem;
 
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
    
    @media(min-width: 580px){
        flex-direction:row;
        gap: 0.75rem;
    }
`;

const Item = styled.div `

 



`;
const Amount = styled.div `

    color: #50808e;
    font-weight: bold;
    width: 25%;

`;





export const CustomerItem: React.FC<ICustomer> = (props) => {
  return (
    <CustomerItemWrapper>
        <PurchaseDate date={props.date} />
            <Container>
                <Amount>{props.amount}€</Amount>
                <Item> {props.item}</Item>
            </Container>
        <FirstName>{props.firstName} {props.lastName}</FirstName>
        

    </CustomerItemWrapper>
  )
}

