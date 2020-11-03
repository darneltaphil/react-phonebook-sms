import React, { useState, useEffect } from "react"
import CustomerItem from "./CustomerItem"
import Accordion from 'react-bootstrap/Accordion'
import Spinner from 'react-bootstrap/Spinner'

const CustomerList = props => {
   const receivedItems = props.items
    if(receivedItems.length === 0){

        return(
            <div className="">
                <center> <Spinner animation="grow" className="display-4" /><br/> Loading</center>
            </div>
        );
    }
return(
    <>
    {receivedItems.map(customer =>(
    <Accordion  >
        <CustomerItem 
            key={customer.id}
            id={customer._id}
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