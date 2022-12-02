import React from 'react'

export function getReservationID(object) {
    let ID = { "id": object }
    fulfillReservation(ID)
  }

export function reserveSpot(payload) {

    fetch("http://localhost:8080/reserve-spot", {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
    
        body: JSON.stringify(payload)
      })
      .then(response=>response.json())
        .then((answer) => {
            console.log(answer)
            getReservationID(answer.id);
        })
}

export function fulfillReservation(payload) {

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      };
      
      fetch('http://localhost:8080/fullfill-reservation', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}
