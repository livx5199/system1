import { useState, useEffect } from 'react'
import Basket from './components/Basket'
import CampingChoice from './components/CampingChoice'
import Splash from './components/Splash'
import TicketChoice from './components/TicketChoice'
import Header from './components/Header'
import SliderText from './components/SliderText'
import ThankYou from './components/ThankYou'
import Timeout from './components/Timeout'
import Footer from './components/Footer'
import PersonalInfo from './components/PersonalInfo'
import PaymentInfo from './components/PaymentInfo'
import { ReactComponent as GraphicElement } from "./SVG/graphic-element.svg";

function App() {

  const localUrl = "http://localhost:8080/available-spots"
  const flyUrl = "https://foofestdatabase.fly.dev"

  //Cart
  const [cart, setCart] = useState([])

  //Camping spots
  const [campingSpots, setCampingSpots] = useState([])

  //Show section-states
  const [showTicketChoice, setShowTicketChoice] = useState(true)
  const [showCampingChoice, setShowCampingChoice] = useState(false)
  const [showBasket, setShowBasket] = useState(false)
  const [showPersonalInfo, setShowPersonalInfo] = useState(false)
  const [showPaymentInfo, setShowPaymentInfo] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [showTimeout, setShowTimeout] = useState(false)

  //Standard ticket array for personal info
  const [totalTickets, setTotalTickets] = useState([])

  //Defining varible for storing personal info
  let ticketInfo = [];

  //Defining variable for storing camping reservation-payload
  const [campingPayload, setCampingPayload] = useState([])

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
      const res = await fetch(flyUrl + "/available-spots");
      const data = await res.json();
      setCampingSpots(data);
    }
    getCampingData();
  }, [])
  
  //Creates a template for objects
  class personObject {
    constructor(typeofticket, fullname, email, address, postal, city, basket) {
      this.typeofticket = typeofticket;
      this.fullname = fullname;
      this.email = email;
      this.address = address;
      this.postal = postal;
      this.city = city;
      this.basket = basket;
    }
  }
  
  class objectTemplate {
    constructor(name, price, id, contains) {
      this.name = name;
      this.price = price;
      this.id = id;
      this.contains = contains;
    }
  }

  //Creating ticket-array, making the objects based on the objectTemplate class and pushes them to the array
  const tickets = [];

  const standardTicket = new objectTemplate("Standard ticket", 799, 1, null)
  const VIPTicket = new objectTemplate("VIP ticket", 1299, 2, null)
  tickets.push(standardTicket, VIPTicket)

  //Same with get-a-tent
  const getATents = [];

  const twoPersTent = new objectTemplate("2 pers. tent", 299, 3, 2)
  const threePersTent = new objectTemplate("3 pers. tent", 399, 4, 3)
  getATents.push(twoPersTent, threePersTent)

  //Creating an object for Green Camping option
  const greenCamping = new objectTemplate("Green Camping", 249, 5, null)
  
  
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
<GraphicElement className="graphic-element" />
      <SliderText />
      
      <Splash />
      

      {showTicketChoice && <TicketChoice ticketchoices={tickets} addToTicketArray={addToTicketArray} removeFromTicketArray={removeFromTicketArray} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} setShowCampingChoice={setShowCampingChoice} setShowTicketChoice={setShowTicketChoice} />}

      {showCampingChoice && <CampingChoice data={greenCamping} ticketsincart={ticketsInCart} getatents={getATents} amountofpeople={amountOfPeople} campingspots={campingSpots} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} setCampingPayload={setCampingPayload} setShowCampingChoice={setShowCampingChoice} setShowBasket={setShowBasket} />}

      {showBasket && <Basket ticketchoices={tickets} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} setShowBasket={setShowBasket} campingPayload={campingPayload} setShowPersonalInfo={setShowPersonalInfo} setShowTicketChoice={setShowTicketChoice} />}

      {showPersonalInfo && <PersonalInfo totaltickets={totalTickets} cart={cart} ticketinfo={ticketInfo} personobject={personObject} setShowPaymentInfo={setShowPaymentInfo} setShowPersonalInfo={setShowPersonalInfo}/>}

      {showPaymentInfo && <PaymentInfo campingspots={campingSpots} ticketinfo={ticketInfo} personobject={personObject} setShowPaymentInfo={setShowPaymentInfo} setShowThankYou={setShowThankYou} setShowTimeout={setShowTimeout} />}

      {showThankYou && <ThankYou cart={cart}/>}
      
      {showTimeout && <Timeout />}
      
      <Footer />

    </div>
  )
}

export default App
