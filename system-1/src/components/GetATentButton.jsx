import React from 'react'
import { useState } from 'react';

function GetATentButton(props) {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  //Makes sure the "contains" property in the wanted tent-option corresponds with amount of tickets - If yes, addToBasket
    function add() {
      if (props.ticketsincart - (props.amountofpeople + props.data.contains) < 0) {
          setCounter(count => count)
          setMessage("Amount of tent space must be equal to number of tickets reserved")
      } else {
        setCounter(count => count + 1)
        setMessage("")
          props.addToCart(props.data)
      }
 
    }
    
    function subtract() {
      if (counter === 0) {
        setCounter(count => count)
      } else {
          setCounter(count => count - 1)
          props.removeFromCart(props.data)
      }
      
      setMessage("");
    }

  return (
    <>
    <h3>{props.data.name} ({props.data.price},-)</h3>
    <div className="counter-container">
    <button onClick={subtract}>-</button>
    <h4>{counter}</h4>
        <button onClick={add}>+</button>
        
      </div>
      <p style={{ color: "red" }}>{message}</p>
  </>
  )
}

export default GetATentButton