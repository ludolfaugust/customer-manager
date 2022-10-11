import React from 'react'
import styled from 'styled-components'

interface Props {
    date: Date;
};

const DateWrapper = styled.div`
display: flex;
flex-direction: column;
border: 2px dotted white;
padding: 1rem;
width: 7rem;
height: 7rem;
gap: 1rem;
background-color: #69A297;
`;

const Day = styled.div`
display: flex;
justify-content: center;
align-items:center;
font-size: 1.5rem;
border-radius: 50%;
border: 1px solid white;
width: 2rem;
height: 2rem;
color: #fff;
background-color: #ddd8c4;
font-weight: bold;
`;

const Month = styled.div`

font-size: 1 rem;
font-weight: bold;

`;

const Year = styled.div`
font-size: 1rem;
`;

export const PurchaseDate: React.FC<Props> = (props) => {

    const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <DateWrapper>
        <Day>{day}</Day>
        <Month>{month}</Month>
        <Year>{year}</Year>
    </DateWrapper>
  )
}
