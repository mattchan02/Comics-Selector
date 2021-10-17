import React from 'react'
import HoldBarBoxStyles from './CSSFiles/HoldBarBoxStyles.css'

function HoldbarBox(props) {
  return (
    <div className="HoldbarBox">
      <p> You have chosen </p>
      <h6> {props.choice} </h6>
    </div>
  )
}

export default HoldbarBox
