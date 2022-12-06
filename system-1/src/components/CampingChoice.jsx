import React from 'react'
import { useRef } from 'react'
import { reserveSpot } from "../modules/database"
import GetATentButton from './GetATentButton';

let message;

function CampingChoice(props) {

  const Spot = useRef(null)
  const campingArray = props.campingspots
  const filter = campingArray.filter(campingspot => campingspot.area === Spot.current.value)
  

  //Takes chosen area and sends payload to reserveSpot (PUT-request)//
  function showSpots(e) {
    e.preventDefault()

    const amountOfTickets = props.cart[0].amount + props.cart[1].amount
    
    const payload = { area: filter[0].area, amount: amountOfTickets }

    reserveSpot(payload)
  }

  function addGreenCamping() {
    props.addToCart(props)
  }


  // function showAvailability() {

  //   const amountOfTickets = props.cart[0].amount + props.cart[1].amount
    
  //   if (filter[0].available - amountOfTickets >= 0) {
  //     return (
  //       <p>Spots available</p>
  //     )
  //   } else {
  //     return (
  //       <p>Spots not available</p>
  //     )
  //   }

  // }

  return (
      <div>
          <h1>CAMPING</h1>
      <section className='container'>
        <label htmlFor="select">Choose camping area</label>
        <select ref={Spot} name="camping-area" id="camping-area">
          {props.campingspots.map((spot) =>
            <option key={spot.id} value={spot.area}>{spot.area}</option>
          )}
          
        </select>
        <p>Hello here is message: {message}</p>

        <label htmlFor="select">Get a tent</label>
          {props.getatents.map((tent) =>
            <GetATentButton data={tent} key={tent.id} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>)}

        <label htmlFor="input">Add green camping (249,-)</label>
        <input onInput={addGreenCamping} type="radio" />

        <button onClick={showSpots}>To checkout</button>
      </section>
    </div>
  )
}

export default CampingChoice