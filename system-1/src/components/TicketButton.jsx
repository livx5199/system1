import React from 'react'

function TicketButton(props) {

    function add() {
        props.addToCart(props);
     }
    
  return (
    <button onClick={add}>{props.data.name} ({props.data.price},-)</button>
  )
}

export default TicketButton