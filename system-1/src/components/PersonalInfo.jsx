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

      const obj = {
      typeofticket: person.querySelector(".typeofticket").innerText,
      name: person.querySelector('.fullname').value,
      email: person.querySelector('.email').value,
      address: person.querySelector('.address').value,
      postal: person.querySelector('.postal').value,
      city: person.querySelector('.city').value,
      basket: basketValue
    }
    ticketInfo.push(obj)
    })

    //Inserting values from ticketInfo and sending them as payload to insertOrder
    ticketInfo.forEach(ticket => {

      insertOrder({
      typeofticket: ticket.typeofticket,
      fullname: ticket.name,
      email: ticket.email,
      address: ticket.address,
      postal: ticket.postal,
      city: ticket.city,
      basket: ticket.basket
    })})
    
  }

  //VIEW
  return (
    <section className='container'>
          
      <h4>Personal info</h4>

      <form onSubmit={submit} className='form' ref={theForm}>
        {amountOfStandardTickets.map(ticket => {
          return (<div className='ticket'>
            <h4 className="typeofticket">Participant info: {ticket.name}</h4>
            <label htmlFor="radio">This is my ticket</label>
            <input className='radio' name="radio" type="radio" />
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
          return(<div className='ticket'>
            <h4 className="typeofticket">Participant info: {ticket.name}</h4>
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
    </section>
  )
}

export default PersonalInfo