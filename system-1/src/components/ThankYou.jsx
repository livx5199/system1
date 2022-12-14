import React from 'react'

function ThankYou(props) {

    function getTotal() {
        let total = 0;
    
        props.cart.forEach((item) => {
          total += (item.amount * item.price) + 99;
        });
        return total;
      }

  return (
      <section className='container'>
          <h3>THANK YOU!</h3>
          <h4>Your order has been placed.</h4>

          <div className="basket">
              <h4>Your reciept</h4>
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
          </div>

          <button>To front page</button>
    </section>
  )
}

export default ThankYou