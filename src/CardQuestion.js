import React from 'react'
import ReactDOM from 'react-dom'
import CardQuestionStyles from "./CardQuestionStyles.css"

function CardQuestion(props) {
  return (
    <div className="FirstBoxCard">
      <h3> {props.title} </h3>
      <p> {props.text} </p>
    </div>
  )
}

export default CardQuestion
