import React, { useState, useEffect } from "react"
import CustomerItem from "./CustomerItem"
import Accordion from 'react-bootstrap/Accordion'

const CustomerList = props => {
   const receivedItems = props.items
    if(receivedItems.length === 0){

        return(
            <div className="">
                <h2> No Customer Found</h2>
            </div>
        );
    }
return(
    <>
    {receivedItems.map(customer =>(
            <Accordion  >
        <CustomerItem 
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            mobile={customer.mobile}
            city={customer.city}
            address={customer.address}
            gps={customer.gps}
            email={customer.email}

             />
             </Accordion>
    )
    )}
    </>
);

}
export default CustomerList;