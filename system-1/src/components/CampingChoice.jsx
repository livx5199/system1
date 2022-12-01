import React from 'react'
import { useRef } from 'react'
import {reserveSpot} from "../modules/database"

function CampingChoice(props) {

  const Spot = useRef(null)

  function showSpots(e) {
    e.preventDefault()

    const campingArray = props.campingspots
    const filter = campingArray.filter(campingspot => campingspot.area === Spot.current.value)
    const payload = {area: filter[0].area, amount: 3}

    console.log(payload)
    reserveSpot(payload)
  }

  return (
      <div>
          <h1>CAMPING</h1>
      <section className='container'>
        <label htmlFor="select">Choose camping area</label>
        <select ref={Spot} onChange={showSpots} name="camping-area" id="camping-area">
          {props.campingspots.map((spot) =>
            <option value={spot.area}>{spot.area}</option>
          )}
          
        </select>

        <label htmlFor="select">Get a tent</label>
        <select name="get-a-tent" id="get-a-tent">
          <option value="2-person-tent">2 pers. tent (299,-)</option>
          <option value="3-person-tent">3 pers. tent (399,-)</option>
        </select>

        <label htmlFor="input">Add green camping (249,-)</label>
        <input type="radio" />

        <button>To checkout</button>
      </section>
    </div>
  )
}

export default CampingChoice