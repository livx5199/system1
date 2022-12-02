import React from 'react'
import PaymentInfo from './PaymentInfo'
import PersonalInfo from './PersonalInfo'

function Checkout() {
  return (
      <form action="">
          <PersonalInfo />
          <PaymentInfo />
    </form>
  )
}

export default Checkout