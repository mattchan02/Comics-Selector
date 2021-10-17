import React from 'react'
import CardQuestion from './CardQuestion.js'
import ThirdQuestionRunStyles from './CSSFiles/ThirdQuestionRunStyles.css'

class ThirdQuestionRun extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStatus: 0
    };
  }

  render() {
    return(
      <div>
        <div className="ThirdQuestionBox">
          <CardQuestion
            title="Modern"
            text="Do you want to read a modern run from the past 20 years?"
            />
          <button
            onClick={this.props.modernRunChoice}
            >
            Click
            </button>
        </div>
        <div className="ThirdQuestionBox">
          <CardQuestion
            title="Classic"
            text="Do you want to read a classic run that is critically acclaimed?"
            />
          <button
            onClick={this.props.classicRunChoice}
            >
            Click
            </button>
        </div>
        <div className="ThirdQuestionBox">
          <CardQuestion
            title="Ongoing"
            text="Do you want to read a run that is being printed to this day?"
            />
          <button
            onClick={this.props.ongoingRunChoice}
            >
            Click
            </button>
        </div>
      </div>
    )
  }

}



export default ThirdQuestionRun
