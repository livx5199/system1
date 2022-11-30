import React from 'react'
import {useRef} from 'react'
import TicketButton from './TicketButton';

function TicketChoice(props) {

  return (
      <div className='ticket-choice'>
          <h1>TICKETS</h1>
      <section className='container'>
        
        <label htmlFor="select">Choose ticket type</label>
          {props.ticketchoices.map((ticket) => 
            <TicketButton data={ticket} key={ticket.id} addToCart={props.addToCart} />)}

        <h3>Total:</h3>
        <button>To camping reservations</button>
      </section>
    </div>
  )
}

export default TicketChoice