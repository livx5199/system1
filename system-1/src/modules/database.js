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

export async function fulfillReservation() {
  const finalID = { id: `${theID}` }
  

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(finalID)
      };
      
      // fetch('http://localhost:8080/fullfill-reservation', options)
      //   .then(response => response.json())
      //   .then((response) => {
      //     console.log("fulfillReservation", response)
      //     if (response.message === "ID not found") {
      //       istimedout = true;
      //     } else {
      //       istimedout = false;
      //     }
      //     getResponseFromFulfillReservation(istimedout);
      //   })
      //   .catch(err => console.error(err));
  
  let res = await fetch('http://localhost:8080/fullfill-reservation', options);
  
  if (res.ok) {

    // let text = await res.text();
    // return text;

    let ret = await res.json();
    console.log(ret)
    return ret;

} else {
    return `HTTP error: ${res.status}`;
}
  

}


export function insertOrder(payload) {
  const url = "https://vgkcikorodjjfitynvhd.supabase.co"

  fetch(url + "/rest/v1/order", {
    method: "POST",
    headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZna2Npa29yb2RqamZpdHludmhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MzkwOTQsImV4cCI6MTk4NTQxNTA5NH0.PrwjdW4ZUB4v2oSZ_w2aW6y60aBqNmGhV8NKh3TNmTw',
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZna2Npa29yb2RqamZpdHludmhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MzkwOTQsImV4cCI6MTk4NTQxNTA5NH0.PrwjdW4ZUB4v2oSZ_w2aW6y60aBqNmGhV8NKh3TNmTw',
      Prefer: 'return=representation'
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
