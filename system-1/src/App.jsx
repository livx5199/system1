import { useState, useEffect } from 'react'
import Basket from './components/Basket'
import CampingChoice from './components/CampingChoice'
import Checkout from './components/Checkout'
import Splash from './components/Splash'
import TicketChoice from './components/TicketChoice'
import Header from './components/Header'
import SliderText from './components/SliderText'

function App() {

  //Cart
  const [cart, setCart] = useState([])

  //Camping spots
  const [campingSpots, setCampingSpots] = useState([])

  //Standard ticket array for personal info
  const [totalTickets, setTotalTickets] = useState([])

  //Variable for total number of tickets reserved
  let filterVIPTickets;
  if (cart.filter(item => item.name === "VIP ticket").length === 0) {
    filterVIPTickets = 0;
  } else {
    filterVIPTickets = cart.filter(item => item.name === "VIP ticket")[0].amount
  }

  let filterStandardTickets;
  if (cart.filter(item => item.name === "Standard ticket").length === 0) {
    filterStandardTickets = 0;
  } else {
    filterStandardTickets = cart.filter(item => item.name === "Standard ticket")[0].amount
  }

  let ticketsInCart = filterStandardTickets + filterVIPTickets
  console.log(cart)

  //Variable for total number of camping spots reserved
  let filter2persTent;
  if (cart.filter(item => item.name === "2 pers. tent").length === 0) {
    filter2persTent = 0;
  } else {
    filter2persTent = cart.filter(item => item.name === "2 pers. tent")[0].amount
  }

  let filter3persTent;
  if (cart.filter(item => item.name === "3 pers. tent").length === 0) {
    filter3persTent = 0;
  } else {
    filter3persTent = cart.filter(item => item.name === "3 pers. tent")[0].amount
  }

  let amountOfPeople = (filter2persTent * 2) + (filter3persTent * 3)
  

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
  
  const getATents = [
    {
      name: "2 pers. tent",
      price: 299,
      id: 3,
      contains: 2
    }, {
      name: "3 pers. tent",
      price: 399,
      id: 4,
      contains: 3
    }
  ];

  const greenCamping = {
    name: "Green Camping",
    price: 249,
    id: 5
  }
  
  function addToCart(data) {
    if (cart.find((entry) => entry.id === data.id)) {
      setCart(oldCart => oldCart.map(entry => {
        if (entry.id !== data.id) {
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
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }

  function addToTicketArray(data) {
    setTotalTickets(oldCart => oldCart.concat(data))
  }

  function removeFromTicketArray() {
    setTotalTickets(oldCart => oldCart.slice(1))
  }

  function removeFromCart(data) {
    //find and modify a product
    setCart(oldCart => {
      const subtracted = oldCart.map(item => {
        if (item.id === data.id) {
          return {...item, amount:item.amount - 1}
        }
        return item;
      })

      const filtered = subtracted.filter(item => item.amount > 0);
      return filtered;

    })
  }

  return (
    <div className="App">
      <Header />

      <SliderText />

      <Splash />

      <TicketChoice ticketchoices={tickets} addToTicketArray={addToTicketArray} removeFromTicketArray={removeFromTicketArray} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />

      <CampingChoice data={greenCamping} ticketsincart={ticketsInCart} getatents={getATents} amountofpeople={amountOfPeople} campingspots={campingSpots} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />

      <Basket ticketchoices={tickets} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />

      <Checkout cart={cart} totaltickets={totalTickets} />

    </div>
  )
}

export default App
