import React from 'react'
import PaymentInfo from './PaymentInfo'
import PersonalInfo from './PersonalInfo'
function Checkout(props) {
  return (
      <>
      <PersonalInfo totaltickets={props.totaltickets} cart={props.cart} />
      <PaymentInfo campingspots={props.campingspots} />
    </>
  )
}

export default Checkout