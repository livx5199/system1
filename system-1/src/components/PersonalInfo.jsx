import React from 'react'

function PersonalInfo() {
  return (
      <div>
          <section className='container'>
        <h4>Personal info</h4>
        <label htmlFor="fullname">Full name</label>
        <input type="text" name='fullname' id='fullname'/>
        <label htmlFor="email">E-mail</label>
        <input type="email" name='email' id='email'/>
        <label htmlFor="adress">Address</label>
        <input type="text" name="adress" id="adress" placeholder='Street/floor/number' />
        <input type="number" name="postal" id="postal" placeholder='Postal code' />
        <input type="text" name="city" id="city" placeholder='City' />
      </section>
    </div>
  )
}

export default PersonalInfo