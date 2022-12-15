import React from 'react'
import {useState} from 'react'
import TicketButton from './TicketButton';

function TicketChoice(props) {

  const [message, setMessage] = useState("")

  function submit(e) {
    e.preventDefault();

    

    if (props.cart.length === 0) {
      setMessage("You must choose min. 1 ticket to proceed")
    } else {
      setMessage("")
      props.setShowCampingChoice(true)
      props.setShowTicketChoice(false)
    }
  }

  return (
      <div className='ticket-choice'>
          <h1 className='section-h1'>TICKETS</h1>
      <section className='container'>
        
        <label htmlFor="select">Choose ticket type</label>
          {props.ticketchoices.map((ticket) => 
            <TicketButton data={ticket} key={ticket.id} addToCart={props.addToCart} removeFromCart={props.removeFromCart} addToTicketArray={props.addToTicketArray} removeFromTicketArray={props.removeFromTicketArray} />)}

        <h3>Total:</h3>
        <button onClick={submit}>To camping reservations</button>
        <p style={{ color: "red" }}>{message}</p>
      </section>
    </div>
  )
}

export default TicketChoice