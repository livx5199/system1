import React from 'react'

function Basket(props) {

  function getTotal() {
    let total = 0;

    props.cart.forEach((item) => {
      total += (item.amount * item.price) + 99;
    });
    return total;
  }

  return (
      <div>
          <h1>CHECKOUT</h1>
      <section className="container">
        <h3>Your order</h3>
        <ul className="basket">
          {props.cart.map((item) => (
            <li>{item.name} x {item.amount}, {item.price * item.amount},-</li>
          ))} 
          <li>Booking fee: 99,-</li>
        </ul> 
        <div className="total">
          <h4>Total</h4>
          <h4>{getTotal()},-</h4>
        </div>
      </section>
    </div>
  )
}

export default Basket