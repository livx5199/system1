import React from 'react'
import { Fragment } from 'react';
import { useRef, useState } from 'react'
import { reserveSpot } from "../modules/database"
import GetATentButton from './GetATentButton';


function CampingChoice(props) {

  const [message, setMessage] = useState("")
  const [style, setStyle] = useState({})
  const [checked, setChecked] = useState(false)
  const Spot = useRef(null)
  const campingArray = props.campingspots
  const filter = campingArray.filter(campingspot => campingspot.area === Spot.current.value)

  //Add/remove Green Camping when checkbox is checked
  const toggleGreenCamping = () => {
    setChecked(!checked);
    if (checked === false) {
      props.addToCart(props.data)
    } else {
      props.removeFromCart(props.data)
    }
  }

  //Takes chosen area and sends payload to reserveSpot (PUT-request)//
  function showSpots(e) {
    e.preventDefault()
    
    const payload = { area: filter[0].area, amount: props.ticketsincart }

    reserveSpot(payload)

    const chosenArea = {
        name: Spot.current.value,
        amount: props.ticketsincart,
        price: 0,
        id: 6,
    }
    
    props.addToCart(chosenArea)
  }


  function showAvailability() {

    let amountOfTickets;

    if (props.cart.amount === 0) {
      amountOfTickets = 0;
    } else if (props.cart.amount === 1) {
      amountOfTickets = props.cart[0].amount
    } else {
      amountOfTickets = props.cart[0].amount + props.cart[1].amount
    }
    
    if (filter[0].available - amountOfTickets >= 0) {
      setMessage("Spots available")
      setStyle({color: "green"})
    } else {
      setMessage("Spots not available")
      setStyle({color: "red"})
    }

  }
  console.log(style)

  //VIEW
  return (
      <div>
          <h1>CAMPING</h1>
      <section className='container'>
        <label htmlFor="select">Choose camping area</label>
        <select required onChange={showAvailability} ref={Spot} name="camping-area" id="camping-area">
          {props.campingspots.map((spot) =>
            <option key={spot.name} value={spot.area}>{spot.area}</option>
          )}
          
        </select>
        <p style={style}>{message}</p>

        <label htmlFor="select">Get a tent</label>
          {props.getatents.map((tent) =>
            <GetATentButton data={tent} amountofpeople={props.amountofpeople} ticketsincart={props.ticketsincart} key={tent.name} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>)}

        <label htmlFor="input">Add green camping (249,-)</label>
        <input onChange={toggleGreenCamping} checked={checked} type="checkbox" />

        <button onClick={showSpots}>To checkout</button>
      </section>
    </div>
  )
}

export default CampingChoice