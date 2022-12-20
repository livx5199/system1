import React from 'react'
import { useRef, useState } from 'react'
import { ReactComponent as GraphicElementHorizontal } from "../SVG/graphic-element-horizontal.svg";


function PersonalInfo(props) {

  const theForm = useRef(null)
  //The amount of tickets in cart
  let amountOfStandardTickets = props.totaltickets.filter(item => item.name === "Standard ticket")
  let amountOfVIPTickets = props.totaltickets.filter(item => item.name === "VIP ticket")

  const [checked, setChecked] = useState(false)

  const toggleIsAble = () => {
    setChecked(!checked);
  }

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
      props.ticketinfo.push(obj)
    })
    
    props.setShowPaymentInfo(true)
    props.setShowPersonalInfo(false)
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

              <div className="sub-section">
              <h3 className="typeofticket">Participant info: {ticket.name}</h3>
              <GraphicElementHorizontal className="graphic-element-horizontal" />
              
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
                </div>

              <div className="volunteer-shift sub-section">
                <h3>Volunteer shift</h3>
                <GraphicElementHorizontal className="graphic-element-horizontal" />
                <p>At MOSAIC we help each other out. Therefore every guest (if able) is obligated to take part in the community by taking a four(ish)-hour shift of their choosing. No whips - we promise free food and fun! Select your shift here.</p>
                <label htmlFor="shift-area">Choose field</label>
                <select name="shift-area" id="shift-area">
                  <option value="Preparing food">Preparing food</option>
                  <option value="Cleaning up">Cleaning up the camp site</option>
                  <option value="Assisting at stations">Assisting at stations</option>
                </select>

                <label htmlFor="shift-day">Choose day</label>
                <select name="shift-day" id="shift-day">
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>

                <label htmlFor="shift-time">Choose time of shift</label>
                <select name="shift-time" id="shift-time">
                  <option value="Wednesday">08.00 - 12.00</option>
                  <option value="Thursday">14.30 - 18.30</option>
                  <option value="Friday">16.30 - 20.30</option>
                </select>

                <label htmlFor="isnotable">I am not able to take a shift</label>
                <input name="isnotable" onChange={toggleIsAble} checked={checked} type="checkbox" />
              </div>
          
            </div>
          )
        })}

        {amountOfVIPTickets.map(ticket => {
          return (
            <div className='ticket'>

              <div className="sub-section">
              <h3 className="typeofticket">Participant info: {ticket.name}</h3>
              <GraphicElementHorizontal className="graphic-element-horizontal" />
              
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
                </div>

              <div className="volunteer-shift">
                <h3>Volunteer shift</h3>
                <GraphicElementHorizontal className="graphic-element-horizontal" />
                <p>At MOSAIC we help each other out. Therefore every guest (if able) is obligated to take part in the community by taking a four(ish)-hour shift of their choosing. Select your shift here.</p>
                <label htmlFor="shift-area">Choose field</label>
                <select name="shift-area" id="shift-area">
                  <option value="Preparing food">Preparing food</option>
                  <option value="Cleaning up">Cleaning up the camp site</option>
                  <option value="Assisting at stations">Assisting at stations</option>
                </select>

                <label htmlFor="shift-day">Choose day</label>
                <select name="shift-day" id="shift-day">
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>

                <label htmlFor="shift-time">Choose time of shift</label>
                <select name="shift-time" id="shift-time">
                  <option value="Wednesday">08.00 - 12.00</option>
                  <option value="Thursday">14.30 - 18.30</option>
                  <option value="Friday">16.30 - 20.30</option>
                </select>

                <label htmlFor="isnotable">I am not able to take a shift</label>
                <input name="isnotable" onChange={toggleIsAble} checked={checked} type="checkbox" />
              </div>
          
            </div>
          )
        })}
        <button className='end-button'>To payment</button>
        </form>
      </div>      
    </section>
  )
}

export default PersonalInfo