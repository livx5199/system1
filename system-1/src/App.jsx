import { useState } from 'react'
import Basket from './components/Basket'
import CampingChoice from './components/CampingChoice'
import PaymentInfo from './components/PaymentInfo'
import PersonalInfo from './components/PersonalInfo'
import TicketChoice from './components/TicketChoice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TicketChoice />

      <CampingChoice />

      <Basket/>

      <PersonalInfo/>

      <PaymentInfo/>


    </div>
  )
}

export default App
