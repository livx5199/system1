import React from 'react'

function TicketChoice(props) {

  return (
      <div>
          <h1>TICKETS</h1>
      <section className='container'>
        <label htmlFor="select">Choose ticket type</label>
        <select name="ticket-type" id="ticket-type">
          {props.ticketchoices.map(ticket => 
            <option value="regular-ticket">{ticket.name} ({ticket.price},-)</option>)}
        </select>

        <label htmlFor="select">Amount</label>
        <select name="ticket-amount" id="ticket-amount">
          <option value="1-ticket">1</option>
          <option value="2-ticket">2</option>
          <option value="3-ticket">3</option>
          <option value="4-ticket">4</option>
          <option value="5-ticket">5</option>
          <option value="6-ticket">6</option>
        </select>

        <h3>Total:</h3>
        <button>To camping reservations</button>
      </section>
    </div>
  )
}

export default TicketChoice