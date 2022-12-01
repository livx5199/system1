import React from 'react'


export function reserveSpot(payload) {

    fetch("http://localhost:8080/reserve-spot", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: payload
      })
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
//     const options = {
//         method: 'PUT',
//         body: payload
//     }

// fetch('http://localhost:8080/reserve-spot', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//     .catch(err => console.error(err));
}
