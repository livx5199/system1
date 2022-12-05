import React from 'react'
import PaymentInfo from './PaymentInfo'
import PersonalInfo from './PersonalInfo'

function Checkout(props) {
  return (
      <form action="">
          <PersonalInfo />
      <PaymentInfo campingspots={props.campingspots} />
    </form>
  )
}

export default Checkout