import { useState } from 'react'
import Basket from './components/Basket'
import CampingChoice from './components/CampingChoice'
import PaymentInfo from './components/PaymentInfo'
import PersonalInfo from './components/PersonalInfo'
import TicketChoice from './components/TicketChoice'

function App() {
  const [count, setCount] = useState(0)
  const tickets = [
    {
      name: "Standard ticket",
      price: 799
    }, {
      name: "VIP ticket",
      price: 1299
    }];

  return (
    <div className="App">
      <TicketChoice ticketchoices={tickets} />

      <CampingChoice />

      <Basket/>

      <PersonalInfo/>

      <PaymentInfo/>

    </div>
  )
}

export default App
