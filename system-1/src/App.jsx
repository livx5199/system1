import { useState, useEffect } from 'react'
import Basket from './components/Basket'
import CampingChoice from './components/CampingChoice'
import PaymentInfo from './components/PaymentInfo'
import PersonalInfo from './components/PersonalInfo'
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
        copy.amount = copy.amount + 1;
        return copy;
      }))
    } else {
      setCart((oldCart) => oldCart.concat({ ...data.data, amount: 1 }));
    }
  }

  return (
    <div className="App">
      <TicketChoice ticketchoices={tickets} addToCart={addToCart} />

      <CampingChoice campingspots={campingSpots} />

      <Basket ticketchoices={tickets} cart={cart} />

      <PersonalInfo/>

      <PaymentInfo/>

    </div>
  )
}

export default App
