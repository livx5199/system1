import React from 'react'
import { ReactComponent as MosaicSplash } from "../SVG/mosaic-splash.svg";

function Splash() {
  return (
      <section className='splash'>
          <h2>WELCOME TO</h2>
          <MosaicSplash className="mosaic-splash"/>
          <h3>Celebration of community - with soundtrack from</h3>
          <h1>METALLICA · PINK FLOYD · LED ZEPPELIN · QUEEN · TOOL · THE BEATLES</h1>
          <h4>... and many more</h4>
    </section>
  )
}

export default Splash