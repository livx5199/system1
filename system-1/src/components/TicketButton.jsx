import React from 'react'
import { useState } from 'react';

function TicketButton(props) {

  const [counter, setCounter] = useState(0);

  function add() {
    if (counter === 6) {
      setCounter(count => count)
    } else {
      setCounter(count => count + 1)
    }
    props.addToCart(props)
  }
  
  function subtract() {
    if (counter === 0) {
      setCounter(count => count)
    } else {
      setCounter(count => count - 1)
    }
    props.removeFromCart(props)

  }
    
  return (
    <>
      <h3>{props.data.name} ({props.data.price},-)</h3>
      <div className="counter-container">
      <button onClick={subtract}>-</button>
      <h4>{counter}</h4>
        <button onClick={add}>+</button>
      </div>
    </>
  )
}


export default TicketButton