import React from 'react'
import {useState} from 'react'
import TicketButton from './TicketButton';
import { ReactComponent as GraphicElementHorizontal } from "../SVG/graphic-element-horizontal.svg";

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
        
        <h3 className='ticket-h3'>Choose ticket type</h3>
        <GraphicElementHorizontal className="graphic-element-horizontal"/>
          {props.ticketchoices.map((ticket) => 
            <TicketButton data={ticket} key={ticket.id} addToCart={props.addToCart} removeFromCart={props.removeFromCart} addToTicketArray={props.addToTicketArray} removeFromTicketArray={props.removeFromTicketArray} />)}

        <h4>Total:</h4>
        <button className='end-button' onClick={submit}>To camping reservations</button>
        <p style={{ color: "red" }}>{message}</p>
      </section>
    </div>
  )
}

export default TicketChoice