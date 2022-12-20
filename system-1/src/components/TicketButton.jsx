import React from 'react'
import { useState, useRef } from 'react';

function TicketButton(props) {

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");


  function add() {
    if (counter === 6) {
      setCounter(count => count)
      setMessage("You can max. choose 6 of each ticket")
    } else {
      setCounter(count => count + 1)
    }
    props.addToCart(props.data)
    props.addToTicketArray(props.data)
  }
  
  function subtract() {
    if (counter === 0) {
      setCounter(count => count)
    } else {
      setCounter(count => count - 1)
    }
    setMessage("")
    props.removeFromCart(props.data)
    props.removeFromTicketArray()
  }
    
  return (
    <>
      <h4 className='ticketbutton'>{props.data.name} ({props.data.price},-)</h4>
      <div className="counter-container">
      <button onClick={subtract}>-</button>
      <h4>{counter}</h4>
        <button onClick={add}>+</button>
      </div>
      <p style={{ color: "red" }}>{message}</p>
    </>
  )
}


export default TicketButton