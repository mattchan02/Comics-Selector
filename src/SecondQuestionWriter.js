import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SecondQuestionWriterStyles from './SecondQuestionWriterStyles.css'
import CardQuestion from './CardQuestion.js'

class SecondQuestionWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      childwriterData: "",
    };
  }

  setChildWriterData(event) {
    console.log("Updating childWriterData")
    const writerData = event.currentTarget.value
    this.props.writerDataUpdate(writerData)
  }

  render() {
    return(
      <div className="SecondQuestionBox">
        <h3> Writer Choice </h3>
        <p> Please input the last name of the writer</p>
        <p><input
          onChange={this.setChildWriterData.bind(this)}
          type="text"
          id="writer"
          placeholder="Eg. King"
          >
          </input>
        </p>
        <p><button
          onClick={this.props.handleWriterQuestion}
          >
          Submit and Continue
          </button></p>
      </div>
    )
  }

}



export default SecondQuestionWriter
