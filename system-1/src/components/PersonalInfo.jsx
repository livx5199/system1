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
    console.log(theForm.current.elements.fullname.value)

    console.log("submitting")
    insertOrder({
      fullname: theForm.current.elements.fullname.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      postal: theForm.current.elements.postal.value,
      city: theForm.current.elements.city.value,
      basket: props.ticketsincart
    })
  }

  //VIEW
  return (
    <section className='container'>
          
      <h4>Personal info</h4>

      <form ref={theForm}>
        {amountOfStandardTickets.map(ticket => {
          return(<>
            <h4>Participant info: {ticket.name}</h4>
            <label htmlFor="fullname">Full name</label>
            <input required type="text" name="fullname" id='fullname' />
            <label htmlFor="email">E-mail</label>
            <input required type="email" name='email' id='email' />
            <label htmlFor="adress">Address</label>
            <input required type="text" name="address" id="adress" placeholder='Street/floor/number' />
            <input required type="text" name="postal" id="postal" placeholder='Postal code' />
            <input required type="text" name="city" id="city" placeholder='City' />
          
          </>)
        })}

        {amountOfVIPTickets.map(ticket => {
          return(<>
            <h4>Participant info: {ticket.name}</h4>
            <label htmlFor="fullname">Full name</label>
            <input required type="text" name='fullname' id='fullname' />
            <label htmlFor="email">E-mail</label>
            <input required type="email" name='email' id='email' />
            <label htmlFor="adress">Address</label>
            <input required type="text" name="address" id="adress" placeholder='Street/floor/number' />
            <input required type="text" name="postal" id="postal" placeholder='Postal code' />
            <input required type="text" name="city" id="city" placeholder='City' />
          
          </>)
        })}
        <button onClick={submit}>To payment</button>
      </form>      
    </section>
  )
}

export default PersonalInfo