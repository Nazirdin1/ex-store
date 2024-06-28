import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const {items} =useSelector(state=>state.cart)
  return (
    <div>
      <pre>
        {JSON.stringify(items, null, 4)}
      </pre>
    </div>
  )
}

export default Cart
