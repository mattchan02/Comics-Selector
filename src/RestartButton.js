import React from 'react'
import ReactDOM from 'react-dom'

class RestartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStatus: 0
    };
  }

  render() {
    return(
      <div>
        <button
        onClick={this.props.restartAllQuestions}
        >
        Reset
        </button>
        <p></p>
      </div>
    )
  }
}

export default RestartButton
