import React from 'react'
import PaymentInfo from './PaymentInfo'
import PersonalInfo from './PersonalInfo'
function Checkout(props) {

  class personObject {
    constructor(typeofticket, fullname, email, address, postal, city, basket) {
      this.typeofticket = typeofticket;
      this.fullname = fullname;
      this.email = email;
      this.address = address;
      this.postal = postal;
      this.city = city;
      this.basket = basket;
    }
  }

  return (
      <>
      <PersonalInfo totaltickets={props.totaltickets} cart={props.cart} ticketinfo={props.ticketinfo} personobject={personObject} />
      <PaymentInfo campingspots={props.campingspots} ticketinfo={props.ticketinfo} personobject={personObject} istimedout={props.istimedout} />
    </>
  )
}

export default Checkout