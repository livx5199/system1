import React from 'react'

let theID;

export function reserveSpot(payload) {

    fetch("http://localhost:8080/reserve-spot", {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
    
        body: JSON.stringify(payload)
      })
      .then(response=>response.json())
        .then((answer) => {
            console.log("response", answer)
            theID = answer.id;
        })
}

export function fulfillReservation() {
  const finalID = { id: `${ theID }`} 

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(finalID)
      };
      
      fetch('http://localhost:8080/fullfill-reservation', options)
        .then(response => response.json())
        .then(response => console.log("fulfillReservation", response))
        .catch(err => console.error(err));

}
