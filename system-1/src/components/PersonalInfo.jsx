import React from 'react'
import { insertOrder } from "../modules/database"
import { useRef } from 'react'

function PersonalInfo(props) {

  const theForm = useRef(null)

  //The amount of tickets in cart
  let amountOfStandardTickets = props.totaltickets.filter(item => item.name === "Standard ticket")
  let amountOfVIPTickets = props.totaltickets.filter(item => item.name === "VIP ticket")

  //Clicking "To payment" button: Inserting form-data into the API
  function submit(e) {
    e.preventDefault()

    class personObject {
      constructor(typeofticket, fullname, email, address, postal, city, basket) {
        this.typeofticket = typeofticket;
        this.fullname = fullname;
        this.email = email;
        this.address = address;
        this.postal = postal;
        this.city = city;
        this.basket = basket;
      }
    }

    let basketValue;
    const persons = theForm.current.querySelectorAll(".ticket")
    const ticketInfo = [];

    //Making an object from the input data to send to ticketInfo array
    persons.forEach(person => {

      //Setting value of the basket
      if (person.querySelector('.radio').checked) {
        basketValue = props.cart;
      } else {
        basketValue = null;
      }

      let obj = new personObject(
        person.querySelector(".typeofticket").innerText,
        person.querySelector('.fullname').value,
        person.querySelector('.email').value,
        person.querySelector('.address').value,
        person.querySelector('.postal').value,
        person.querySelector('.city').value,
        basketValue
      )
    ticketInfo.push(obj)
    })

    //Inserting values from ticketInfo and sending them as payload to insertOrder
    ticketInfo.forEach(ticket => {

      let obj = new personObject(
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

  //VIEW
  return (
    <section className="personal-info">
          
      <h1>PERSONAL INFO</h1>

      <div className="container">
      <form onSubmit={submit} className='form' ref={theForm}>
        {amountOfStandardTickets.map(ticket => {
          return (
            <div className='ticket'>

              <h3 className="typeofticket">Participant info: {ticket.name}</h3>
              
              <div className="radio-button">
                <input className='radio' name="radio" type="radio" />
                <label htmlFor="radio">This is my ticket</label>
              </div>
              
              <label htmlFor="fullname">Full name</label>
              <input required type="text" name="fullname" className='fullname' />
              
              <label htmlFor="email">E-mail</label>
              <input required type="email" name='email' className='email' />
              
              <label htmlFor="adress">Address</label>
              <input required type="text" name="address" className="address" placeholder='Street/floor/number' />
              <input required type="text" name="postal" className="postal" placeholder='Postal code' />
              <input required type="text" name="city" className="city" placeholder='City' />
          
          </div>)
        })}

        {amountOfVIPTickets.map(ticket => {
          return (
            <div className='ticket'>
            <h3 className="typeofticket">Participant info: {ticket.name}</h3>
            <label htmlFor="radio">This is my ticket</label>
            <input className='radio' name="radio" type="radio" />
            <label htmlFor="fullname">Full name</label>
            <input required type="text" name='fullname' className='fullname' />
            <label htmlFor="email">E-mail</label>
            <input required type="email" name='email' className='email' />
            <label htmlFor="adress">Address</label>
            <input required type="text" name="address" className="address" placeholder='Street/floor/number' />
            <input required type="text" name="postal" className="postal" placeholder='Postal code' />
            <input required type="text" name="city" className="city" placeholder='City' />
          
          </div>)
        })}
        <button>To payment</button>
        </form>
      </div>      
    </section>
  )
}

export default PersonalInfo