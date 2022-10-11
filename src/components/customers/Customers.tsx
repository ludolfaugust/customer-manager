import React from 'react';
import { ICustomer } from '../types/customer';
import { CustomerItem } from './CustomerItem';
import styled from 'styled-components';


interface Props {
  customers: ICustomer[];
}

const CustomerWrapper = styled.div`

  background-color: #50808E;
  padding: 1rem;
  margin: 1rem auto;
  color: white;
  gap: 1rem;
  border-radius: 2px;

  @media (min-width: 580px) {
    width: 40rem;
    margin: 3rem auto;
    
  }

`;



export const Customers:React.FC<Props> = ({customers}) => {
  return (
    <>
      <CustomerWrapper>
        {customers.map((customer: any) => (
          
          <CustomerItem 
            firstName={customer.firstName} 
            amount={customer.amount} 
            item={customer.item}
            id={customer.id} 
            lastName={customer.lastName} 
            date={customer.date} 
          />
         
        ))}
      </CustomerWrapper>  
    </>
  )
}

