import React from 'react'
import { insertOrder } from "../modules/database"
import { useRef } from 'react'

function PersonalInfo(props) {

  const theForm = useRef(null)

  function submit(e) {
    e.preventDefault()

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
  
  const standardTicketArray = props.ticketsincart.filter(item => item.name.includes("Standard ticket"))
  const VIPTicketArray = props.ticketsincart.filter(item => item.name.includes("VIP ticket"))

  return (
    <section className='container'>
          
      <h4>Personal info</h4>
      <form ref={theForm}>
            <h4>Participant info: Standard Ticket</h4>
            <label htmlFor="fullname">Full name</label>
            <input required type="text" name='fullname' id='fullname' />
            <label htmlFor="email">E-mail</label>
            <input required type="email" name='email' id='email' />
            <label htmlFor="adress">Address</label>
            <input required type="text" name="address" id="adress" placeholder='Street/floor/number' />
            <input required type="text" name="postal" id="postal" placeholder='Postal code' />
            <input required type="text" name="city" id="city" placeholder='City' />
            <button onClick={submit}>To payment</button>
          </form>
      {/* {standardTicketArray.map(ticket => {
        return (
          <form onSubmit={submit}>
            <h4>Participant info: Standard Ticket</h4>
            <label htmlFor="fullname">Full name</label>
            <input required type="text" name='fullname' id='fullname' />
            <label htmlFor="email">E-mail</label>
            <input required type="email" name='email' id='email' />
            <label htmlFor="adress">Address</label>
            <input required type="text" name="adress" id="adress" placeholder='Street/floor/number' />
            <input required type="number" name="postal" id="postal" placeholder='Postal code' />
            <input required type="text" name="city" id="city" placeholder='City' />
            <button>To payment</button>
          </form>
        )
      })
      } 
      {VIPTicketArray.map(ticket => {
        return (
          <form onSubmit={submit}>
            <h4>Participant info: VIP ticket</h4>
            <label htmlFor="fullname">Full name</label>
            <input required type="text" name='fullname' id='fullname' />
            <label htmlFor="email">E-mail</label>
            <input required type="email" name='email' id='email' />
            <label htmlFor="adress">Address</label>
            <input required type="text" name="adress" id="adress" placeholder='Street/floor/number' />
            <input required type="number" name="postal" id="postal" placeholder='Postal code' />
            <input required type="text" name="city" id="city" placeholder='City' />
            <button>To payment</button>
          </form>
        )
      })
      } */}
        
      
    </section>
  )
}

export default PersonalInfo