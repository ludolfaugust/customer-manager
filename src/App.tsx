
import './App.css';
import { Customers } from './components/customers/Customers';
import { CustomerForm } from './components/NewCustomer/CustomerForm';




const App: React.FC = () => {
  const customers = [
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
    }
  ]
  return (
    <div className='background'>
      <div className="App">
        <CustomerForm />
        <Customers customers={customers} />
        
      </div>
    </div> 
    );
}

export default App;
