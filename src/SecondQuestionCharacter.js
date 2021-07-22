import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SecondQuestionCharacterStyles from "./SecondQuestionCharacterStyles.css"
import ThirdQuestionRun from "./ThirdQuestionRun.js"

class SecondQuestionCharacter extends React.Component {
  constructor() {
    super();
    this.state = {
      childCharacterData: "",
    };
    this.childCharacterData = this.setChildCharacterData.bind(this)
  }

  setChildCharacterData(event) {
    console.log("Updating childCharacterData")
    const characterData = event.currentTarget.value
    this.props.characterDataUpdate(characterData)
  }

  render() {
    return(
      <div className="SecondQuestionBox">
        <div>
          <h3> Character Choice </h3>
          <p> Please input the character you wish to read </p>
          <p><input
            onChange={this.setChildCharacterData.bind(this)}
            type="text"
            id="character"
            characterData={this.props.value}
            placeholder="Eg. Iron Man"
            >
            </input>
          </p>
          <p><button
            onClick={this.props.handleCharacterQuestion}
            >
            Submit and Continue
            </button></p>
        </div>
      </div>
    )
  }
}

export default SecondQuestionCharacter
