import React from 'react'
import { CustomerForm } from './CustomerForm'

interface Props {
    onAddCustomer: (customer:any) => void;
}

export const NewCustomer:React.FC<Props> = (props) => {

    const saveCustomerHandler = (enteredCustomerData: any) => {
        const customerData={
            ...enteredCustomerData,
            id: Math.random().toString(),
        }

        props.onAddCustomer(customerData)
    }


  return (
<CustomerForm onSaveCustomer={saveCustomerHandler} />  )
}
