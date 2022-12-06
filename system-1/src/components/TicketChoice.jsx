import React from 'react'
import {useRef} from 'react'
import TicketButton from './TicketButton';

function TicketChoice(props) {


  function submit(e) {
    e.preventDefault();

    if (props.cart.length === 0) {
      console.log("You shall not pass")
    }

  }

  return (
      <div className='ticket-choice'>
          <h1>TICKETS</h1>
      <section className='container'>
        
        <label htmlFor="select">Choose ticket type</label>
          {props.ticketchoices.map((ticket) => 
            <TicketButton data={ticket} key={ticket.id} addToCart={props.addToCart} removeFromCart={props.removeFromCart} />)}

        <h3>Total:</h3>
        <button onClick={submit}>To camping reservations</button>
      </section>
    </div>
  )
}

export default TicketChoice