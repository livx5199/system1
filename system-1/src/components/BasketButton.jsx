import React from 'react'

function BasketButton(props) {
    function add() {
        props.addToCart(props.item)
    }

    function subtract() {
        props.removeFromCart(props.item)
    }

    return (
    <>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
    </>
  )
}

export default BasketButton