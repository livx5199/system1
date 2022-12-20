import React from 'react'
import { Fragment } from 'react';
import { useRef, useState } from 'react'
import { reserveSpot } from "../modules/database"
import GetATentButton from './GetATentButton';
import { ReactComponent as GraphicElementHorizontal } from "../SVG/graphic-element-horizontal.svg";



function CampingChoice(props) {

  const [message, setMessage] = useState("")
  const [style, setStyle] = useState({})
  const [checked, setChecked] = useState(false)
  const Spot = useRef(null)
  const campingArray = props.campingspots

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
    
    const filter = campingArray.filter(campingspot => campingspot.area === Spot.current.value)
    const payload = { area: filter[0].area, amount: props.ticketsincart }

    reserveSpot(payload)

    const chosenArea = {
        name: Spot.current.value,
        amount: props.ticketsincart,
        price: 0,
        id: 6,
    }
    
    props.addToCart(chosenArea)
    props.setShowBasket(true)
    props.setShowCampingChoice(false)
  }


  //Change "message" by availability of chosen spot
  function showAvailability() {

    let amountOfTickets;
    const filter = campingArray.filter(campingspot => campingspot.area === Spot.current.value)

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

  //VIEW
  return (
      <div>
          <h1 className='section-h1'>CAMPING</h1>
      <section className='container'>
        <h3>Where do you want to camp?</h3>
        <GraphicElementHorizontal className="graphic-element-horizontal"/>
        <label htmlFor="select">Choose camping area</label>
        <select required onChange={showAvailability} ref={Spot} name="camping-area" id="camping-area">
          {props.campingspots.map((spot) =>
            <option key={spot.name} value={spot.area}>{spot.area}</option>
          )}
          
        </select>
        <p style={style}>{message}</p>

        <h3>Get a tent</h3>
        <GraphicElementHorizontal className="graphic-element-horizontal"/>
        <p>Wanna ease your travellings? We have a solution! Add our tent-package and we will set up a cozy Thinsburg-tent at your preferred spot - ready for your arrival.</p>
          {props.getatents.map((tent) =>
            <GetATentButton data={tent} amountofpeople={props.amountofpeople} ticketsincart={props.ticketsincart} key={tent.name} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>)}

        <div className="green-camping">
          <h3>Green camping</h3>
          <GraphicElementHorizontal className="graphic-element-horizontal"/>
        <label htmlFor="input">Add green camping (249,-)</label>
          <input onChange={toggleGreenCamping} checked={checked} type="checkbox" />
        </div>
        <button className='end-button' onClick={showSpots}>To checkout</button>
      </section>
    </div>
  )
}

export default CampingChoice