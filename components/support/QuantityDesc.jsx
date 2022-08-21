import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const QuantityDesc = ({ minusOnClick, qty, plusOnClick } ) => {
  return (
    <p className="quantity-desc">
        <span className="minus" onClick={minusOnClick}><AiOutlineMinus /> </span>
        <span className="num" >{qty}</span>
        <span className="plus" onClick={plusOnClick}><AiOutlinePlus /> </span>

    </p>

  )

}

export default QuantityDesc