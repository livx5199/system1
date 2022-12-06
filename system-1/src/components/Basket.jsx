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
        <div className="basket">
          {props.cart.map((item) => (
            <div className="list-item">
            <p>- {item.name} x {item.amount}</p>
              <p>{item.price * item.amount},-</p>
            </div>
          ))} 
          <div className="list-item">
            <p>- Booking fee</p>
            <p>99,-</p>
          </div>

        </div> 
        <div className="list-item total">
          <h4>Total</h4>
          <h4>{getTotal()},-</h4>
        </div>
      </section>
    </div>
  )
}

export default Basket