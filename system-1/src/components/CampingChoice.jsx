import React from 'react'

function CampingChoice() {
  return (
      <div>
          <h1>CAMPING</h1>
      <section className='container'>
        <label htmlFor="select">Choose camping area</label>
        <select name="camping-area" id="camping-area">
          <option value="valheim">Valheim</option>
          <option value="jotunheim">Jotunheim</option>
          <option value="alfheim">Alfheim</option>
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