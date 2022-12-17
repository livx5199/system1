import React from 'react'
import { ReactComponent as GraphicElementHorizontal } from "../SVG/graphic-element-horizontal.svg";


function Timeout() {
  return (
      <section className='container'>
      <h3>SORRY!</h3>
      <GraphicElementHorizontal className="graphic-element-horizontal" />
          <h4>Your session has timed out.</h4>
          <button>Start over</button>
    </section>
  )
}

export default Timeout