import React from 'react'
import CardQuestionStyles from './CSSFiles/CardQuestionStyles.css'

function CardQuestion(props) {
  return (
    <div className="FirstBoxCard">
      <h3> {props.title} </h3>
      <p> {props.text} </p>
    </div>
  )
}

export default CardQuestion
