import React from 'react'
import {fulfillReservation, insertOrder} from "../modules/database"
  
function PaymentInfo(props) {

  function submit(e) {
    e.preventDefault();
    fulfillReservation();

    // Inserting values from ticketInfo and sending them as payload to insertOrder
    props.ticketinfo.forEach(ticket => {

      let obj = new props.personobject(
        ticket.typeofticket,
        ticket.fullname,
        ticket.email,
        ticket.address,
        ticket.postal,
        ticket.city,
        ticket.basket
      )

      insertOrder(obj)})
  }

  return (
    <form onSubmit={submit}><section className="container">
    <h4>Payment info</h4>
    <label htmlFor="credit-card-number">Credit card number</label>
    <input required type="number" name="credit-card-number" id="credit-card-number" />

    <div className="exp-date">
    <label htmlFor="exp-date">Expiration date</label>
    <select required name="exp-date" id="exp-date">
      <option value="exp-1">1</option>
      <option value="exp-2">2</option>
      <option value="exp-3">3</option>
      <option value="exp-4">4</option>
      <option value="exp-5">5</option>
      <option value="exp-6">6</option>
      <option value="exp-7">7</option>
      <option value="exp-8">8</option>
      <option value="exp-9">9</option>
      <option value="exp-10">10</option>
      <option value="exp-11">11</option>
      <option value="exp-12">12</option>
      </select>
      
    <select required name="exp-year" id="exp-year">
      <option value="exp-30">30</option>
      <option value="exp-29">29</option>
      <option value="exp-28">28</option>
      <option value="exp-27">27</option>
      <option value="exp-26">26</option>
      <option value="exp-25">25</option>
      <option value="exp-24">24</option>
      <option value="exp-23">23</option>
        <option value="exp-22">22</option>
      </select>
    </div>

    <label htmlFor="sec-code">Security code</label>
    <input required type="number" name="sec-code" id="sec-code" />

    <button>Pay</button>

  </section></form>
  )
}

export default PaymentInfo