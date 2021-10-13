import React from 'react'
import ReactDOM from 'react-dom'
import CardQuestion from "./CardQuestion.js"
import CardDatabase from "./CardDatabase.js"

class ThirdAppearanceQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      AppearanceDataFinished: "",
    };
  }

  render() {
    return(
      <div>
        <div
          className="FirstQuestionBoxCharacterStyles"
          >
          <CardQuestion
            title="Series"
            text="Do you want to search for an ongoing series with a prominent appearance?"
            />
          <button onClick={this.props.seriesChoice}> Choose a Series </button>
        </div>
        <div
          className="FirstQuestionBoxCharacterStyles"
          >
          <CardQuestion
            title="Event"
            text="Do you want to search for an event story that may or may not be a prominent appearance?"
            />
          <button onClick={this.props.eventChoice}> Choose an Event </button>
        </div>
      </div>
    )
  }
}


export default ThirdAppearanceQuestion;
