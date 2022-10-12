
import { useState } from 'react';
import './App.css';
import { Customers } from './components/customers/Customers';
import { CustomerForm } from './components/NewCustomer/CustomerForm';
import { NewCustomer } from './components/NewCustomer/NewCustomer';

const dummyData = [
  {
    id: "c1",
    firstName: "Mike",
    lastName: "Moleskine",
    date: new Date(2020, 8, 15),
    amount: 605.54,
    item: "Vanilla Ice Cream",
  },
  {
    id: "c2",
    firstName: "Mikki",
    lastName: "Zoolander",
    date: new Date(2021, 8, 23),
    amount: 905.87,
    item: "Vanilla Ice Cream",
  },
  {
    id: "c3",
    firstName: "Mitchel",
    lastName: "Marks",
    date:new Date(2022, 8, 2),
    amount:769.54,
    item: "Vanilla Ice Cream",
  },
  {
    id: "c4",
    firstName: "Mike",
    lastName: "Moleskine",
    date: new Date(2020, 8, 15),
    amount: 605.54,
    item: "Vanilla Ice Cream",
  },
  {
    id: "c5",
    firstName: "Mikki",
    lastName: "Zoolander",
    date: new Date(2021, 8, 23),
    amount: 905.87,
    item: "Vanilla Ice Cream",
  },
  {
    id: "c6",
    firstName: "Mitchel",
    lastName: "Marks",
    date:new Date(2022, 8, 2),
    amount:769.54,
    item: "Vanilla Ice Cream",
  }
]


const App: React.FC = () => {
  
const [customerData, setCustomerData] = useState(dummyData)


    const addCustomersHandler = (customer: any) => {

      setCustomerData((prev) => {
        return [customer, ...prev];
      });

console.log(customer)

    };
  
  return (
    <div className='background'>
      <div className="App">
        <NewCustomer onAddCustomer={addCustomersHandler} />
        <Customers customers={customerData} />
        
      </div>
    </div> 
    );
}

export default App;
