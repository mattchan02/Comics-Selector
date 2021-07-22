import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SecondQuestionCompanyStyles from "./SecondQuestionCompanyStyles.css"
import CardQuestion from "./CardQuestion.js"
import ThirdQuestionRun from './ThirdQuestionRun.js'

class SecondQuestionCompany extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStatus: 0
    };
  }

  render() {
    return(
      <div>
        <div className="SecondQuestionBox">
          <CardQuestion
            title="Marvel"
            text="Read stories of the Avengers, X-Men, and many more!"
            />
          <button onClick={this.props.companyMarvelChoice}> Choose Marvel! </button>
        </div>
        <div className="SecondQuestionBox">
          <CardQuestion
            title="DC"
            text="The classic trinity of Superman, Batman and Wonder Woman, among others"
            />
          <button onClick={this.props.companyDCChoice}> Choose DC! </button>
        </div>
        <div className="SecondQuestionBox">
          <CardQuestion
            title="Image"
            text="The independent publisher that champions creator's rights"
            />
          <button onClick={this.props.companyImageChoice}> Choose Image! </button>
        </div>
        <div className="SecondQuestionBox">
          <CardQuestion
            title="Other"
            text="Many other companies such as IDW, Dark Horse, Dynamite and more!"
            />
          <button onClick={this.props.companyOtherChoice}> Choose Others! </button>
        </div>
      </div>
    )
  }
}


export default SecondQuestionCompany
