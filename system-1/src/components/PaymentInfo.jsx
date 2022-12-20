import React from 'react'
import { fulfillReservation, insertOrder } from "../modules/database"
import { ReactComponent as GraphicElementHorizontal } from "../SVG/graphic-element-horizontal.svg";

  
function PaymentInfo(props) {


  function submit(e) {
    e.preventDefault();

    fulfillReservation().then(data => {
      const dataMessage = data.message;
      prepareUserToSend(dataMessage)
    });
  }

  function prepareUserToSend(data) {

    let isTimedOut;

    if (data === "ID not found") {
      isTimedOut = true;
    } else {
      isTimedOut = false;
    }

    if (isTimedOut === true) {
      console.log(isTimedOut)
      props.setShowTimeout(true)
      props.setShowPaymentInfo(false)
    } else {
      console.log(isTimedOut)
      props.setShowThankYou(true)
      props.setShowPaymentInfo(false)

      props.ticketinfo.forEach(ticket => {
        
        // Inserting values from ticketInfo and sending them as payload to insertOrder
        let obj = new props.personobject(
          ticket.typeofticket,
          ticket.fullname,
          ticket.email,
          ticket.address,
          ticket.postal,
          ticket.city,
          ticket.basket
        )
  
        insertOrder(obj)
      })
    }

  }




  return (
    <form onSubmit={submit}><section className="container">
      <h3>Payment info</h3>
      <GraphicElementHorizontal className="graphic-element-horizontal" />
    <label htmlFor="credit-card-number">Credit card number</label>
    <input required type="number" name="credit-card-number" id="credit-card-number" />

    <div className="exp-date">
        <label htmlFor="exp-date">Expiration date</label>
        <div className="exp-date-select">
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
    </div>

    <label htmlFor="sec-code">Security code</label>
    <input required type="number" name="sec-code" id="sec-code" />

    <button className='end-button'>Pay</button>

  </section></form>
  )
}

export default PaymentInfo