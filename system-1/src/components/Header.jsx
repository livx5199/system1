import React from 'react'
import {ReactComponent as Logo} from "../SVG/mosaic-logo.svg"

function Header() {
  return (
      <header>
          <Logo className="header-logo" />
          <p>MOSAIC Festival</p>
    </header>
  )
}

export default Header