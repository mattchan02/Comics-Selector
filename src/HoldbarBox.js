import React from 'react'
import ReactDOM from 'react-dom'
import HoldbarBoxStyles from './HoldbarBoxStyles.css'

function HoldbarBox(props) {
  return (
    <div className="HoldbarBox">
      <p> You have chosen </p>
      <h6> {props.choice} </h6>
    </div>
  )
}

export default HoldbarBox
