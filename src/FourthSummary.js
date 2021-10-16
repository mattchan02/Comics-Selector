import React from "react"
import ReactDOM from "react-dom"
import ChoiceBar from "./ChoiceBar"

class FourthSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      handleFinalStep: 0
    };
  }

  render() {
    return(
      <div>
        <p>
        Your choices have all been made.<br></br>
        Would you like to start?
        <br></br>
        </p>
        <button
          onClick={this.props.handleRenderDatabase}
          >
          Start
        </button>
        <br></br>
      </div>

    )
  }
}

export default FourthSummary;
