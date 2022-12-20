import React from 'react'
import { ReactComponent as GraphicElementHorizontal } from "../SVG/graphic-element-horizontal.svg";


function Timeout() {
  return (
    <section className='container'>
      <div className="sub-section">
      <h3>SORRY!</h3>
      <GraphicElementHorizontal className="graphic-element-horizontal" />
        <h4>Your session has timed out.</h4>
      </div>
          <button className='end-button'>Start over</button>
    </section>
  )
}

export default Timeout