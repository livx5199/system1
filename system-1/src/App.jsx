import { useState, useEffect } from 'react'
import Basket from './components/Basket'
import CampingChoice from './components/CampingChoice'
import Checkout from './components/Checkout'
import TicketChoice from './components/TicketChoice'

function App() {
  const [cart, setCart] = useState([])

  const [campingSpots, setCampingSpots] = useState([])

  useEffect(() => {
    async function getCampingData() {
      const res = await fetch("http://localhost:8080/available-spots");
      const data = await res.json();
      setCampingSpots(data);
    }
    getCampingData();
  }, [])

  const tickets = [
    {
      name: "Standard ticket",
      price: 799,
      id: 1
    }, {
      name: "VIP ticket",
      price: 1299,
      id: 2
    }];
  
  function addToCart(data) {
    if (cart.find((entry) => entry.id === data.data.id)) {
      setCart(oldCart => oldCart.map(entry => {
        if (entry.id !== data.data.id) {
          return entry
        }
        const copy = { ...entry };
        if (copy.amount === 6) {
          copy.amount = copy.amount
        } else {
          copy.amount = copy.amount + 1;
        }
        return copy;
      }))
    } else {
      setCart((oldCart) => oldCart.concat({ ...data.data, amount: 1 }));
    }
  }

  function removeFromCart(data) {
    if (cart.find((entry) => entry.id === data.data.id)) {
      setCart(oldCart => oldCart.map(entry => {
        if (entry.id !== data.data.id) {
          return entry
        }
        const copy = { ...entry };
        if (copy.amount === 0) {
          copy.amount = copy.amount
        } else {
          copy.amount = copy.amount - 1;
        }
        return copy;
      }))
    } else {
      setCart((oldCart) => oldCart.concat({ ...data.data, amount: 1 }));
    }
  }

  return (
    <div className="App">
      <TicketChoice ticketchoices={tickets} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />

      <CampingChoice campingspots={campingSpots} cart={cart} />

      <Basket ticketchoices={tickets} cart={cart} />

      <Checkout/>

    </div>
  )
}

export default App
