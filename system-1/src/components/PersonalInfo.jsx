import React from 'react'

function PersonalInfo() {

  return (
    <section className='container'>
          
        <h4>Personal info</h4>
        <label htmlFor="fullname">Full name</label>
        <input required type="text" name='fullname' id='fullname'/>
        <label htmlFor="email">E-mail</label>
        <input required type="email" name='email' id='email'/>
        <label htmlFor="adress">Address</label>
        <input required type="text" name="adress" id="adress" placeholder='Street/floor/number' />
        <input required type="number" name="postal" id="postal" placeholder='Postal code' />
        <input required type="text" name="city" id="city" placeholder='City' />
      
    </section>
  )
}

export default PersonalInfo