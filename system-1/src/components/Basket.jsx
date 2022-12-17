import React from 'react'
import { ReactComponent as GraphicElementHorizontal } from "../SVG/graphic-element-horizontal.svg";


function Basket(props) {

  function submit(e) {
    e.preventDefault();

    props.setShowPersonalInfo(true)
    props.setShowBasket(false)
  }

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
        <h3>Your basket</h3>
        <GraphicElementHorizontal className="graphic-element-horizontal"/>
        <h4>Is everything in order?</h4>
        <div className="basket">
          {props.cart.map((item) => (
            <div key={item.id} className="list-item">
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
        <div className="basket-buttons">
          <button onClick={() => {
            props.setShowTicketChoice(true)
            props.setShowBasket(false)
        }}>No, take me back</button>
          <button onClick={submit}>Yes, I'm good</button>
        </div>
      </section>
    </div>
  )
}

export default Basket