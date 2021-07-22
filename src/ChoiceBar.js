import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ChoiceBarStyles from './ChoiceBarStyles.css'
import CardQuestion from "./CardQuestion.js"
import CardDatabase from "./CardDatabase.js"
import HoldbarBox from "./HoldbarBox.js"
import HoldbarBoxStyles from './HoldbarBoxStyles.css'
import SecondQuestionCharacter from './SecondQuestionCharacter.js'
import SecondQuestionCompany from './SecondQuestionCompany.js'
import SecondQuestionWriter from './SecondQuestionWriter.js'
import ThirdQuestionRun from './ThirdQuestionRun.js'
import ThirdQuestionRunStyles from './ThirdQuestionRunStyles.css'
import FourthSummary from './FourthSummary.js'
import Database from "./Database.js"
import RestartButton from "./RestartButton.js"

class ChoiceBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handleFirstQuestion: false,
      handleStartingInfo: true,
      handleCharacterQuestion: false,
      handleCompanyQuestion: false,
      handleWriterQuestion: false,
      handleRunQuestion: false,
      handleFourthSummary: false,
      handleRenderDatabase: false,
      characterChoice: false,
      characterData: "",
      companyChoice: false,
      companyMarvel: "",
      companyDC: "",
      companyImage: "",
      companyOther: "",
      companyData: "",
      writerChoice: false,
      writerData: "",
      classicRun: "",
      modernRun: "",
      ongoingRun: "",
      runData: "",
      randomChoice: false,
    };
    this.handleStartingInfo = this.restartAllQuestions.bind(this)
    this.handleFirstQuestion = this.handleFirstQuestion.bind(this)
    this.handleCharacterQuestion = this.handleCharacterQuestion.bind(this)
    this.handleWriterQuestion = this.handleWriterQuestion.bind(this)
    this.handleRenderDatabase = this.handleRenderDatabase.bind(this)
    this.characterChoice = this.characterChoice.bind(this)
    this.companyChoice = this.companyChoice.bind(this)
    this.writerChoice = this.writerChoice.bind(this)
    this.characterData = this.characterDataUpdate.bind(this)
    this.writerData = this.writerDataUpdate.bind(this)
    this.companyMarvel = this.companyMarvelChoice.bind(this)
    this.companyDC = this.companyDCChoice.bind(this)
    this.companyImage = this.companyImageChoice.bind(this)
    this.companyOther = this.companyOtherChoice.bind(this)
    this.classicRun = this.classicRunChoice.bind(this)
    this.modernRun = this.modernRunChoice.bind(this)
    this.ongoingRun = this.ongoingRunChoice.bind(this)
  };

  handleFirstQuestion() {
    console.log("Start Rendering First Question")
    this.setState({
      handleFirstQuestion: true,
      handleStartingInfo: false
      }, () => {console.log(this.state);
    });
  }

  handleCharacterQuestion() {
    console.log("Character Data Input Finished and moving to Run Question")
    this.setState({
      handleCharacterQuestion: false,
      handleRunQuestion: true
      }, () => {console.log(this.state);
    });
  }

  handleWriterQuestion() {
    console.log("Writer Data Input Finished and moving on")
    this.setState({
      writerChoice: false,
      handleFourthSummary: true
    }, () => {console.log(this.state);
    })
  }

  characterChoice() {
    console.log("Character Choice Acknowledged at Parent")
    this.setState({
      characterChoice: true,
      handleFirstQuestion: false,
      handleCharacterQuestion: true
      }, () => {console.log(this.state);
    });
  }

  companyChoice() {
    console.log("Company Choice Acknowledged at Parent")
    this.setState({
      companyChoice: true,
      handleFirstQuestion: false,
      handleCompanyQuestion: true
      }, () => {console.log(this.state);
    });
  }

  writerChoice() {
    console.log("Writer Choice Acknowledged at Parent")
    this.setState({
      writerChoice: true,
      handleFirstQuestion: false,
      handleWriterQuestion: true
      }, () => {console.log(this.state);
    });
  }

  characterDataUpdate(characterData) {
    console.log("Character Data update from SecondQuestionCharacter component")
    this.setState({
      characterData: characterData
    }, () => {console.log(this.state);
    });
  }

  writerDataUpdate(writerData) {
    console.log("Writer Data Update from SecondQuestionWriter component")
    this.setState({
      writerData: writerData
    }, () => {console.log(this.state);
    })
  }

  companyMarvelChoice() {
    console.log("Company Marvel Choice Acknowledged at Parent")
    this.setState({
      handleCompanyQuestion: false,
      handleRunQuestion: true,
      characterData: "DNF",
      companyMarvel: "Marvel",
      companyData: "Marvel",
      companyDC: false,
      companyImage: false,
      companyOther: false
      }, () => {console.log(this.state);
    })
  }

  companyDCChoice() {
    console.log("Company DC Choice Acknowledged at Parent")
    this.setState({
      handleCompanyQuestion: false,
      handleRunQuestion: true,
      characterData: "DNF",
      companyDC: "DC Comics",
      companyData: "DC Comics",
      companyMarvel: false,
      companyImage: false,
      companyOther: false
      }, () => {console.log(this.state);
    })
  }

  companyImageChoice() {
    console.log("Company Image Choice Acknowledged at Parent")
    this.setState({
      handleCompanyQuestion: false,
      handleRunQuestion: true,
      characterData: "DNF",
      companyData: "Image",
      companyImage: "Image",
      companyMarvel: false,
      companyDC: false,
      companyOther: false
      }, () => {console.log(this.state);
    })
  }

  companyOtherChoice() {
    console.log("Company Other Choice Acknowledged at Parent")
    this.setState({
      handleCompanyQuestion: false,
      handleRunQuestion: true,
      companyData: "Other",
      companyOther: "Other",
      characterData: "DNF",
      companyMarvel: false,
      companyDC: false,
      companyImage: false
      }, () => {console.log(this.state);
    })
  }

  classicRunChoice() {
    console.log("Classic Run Choice Acknowledged at Parent")
    this.setState({
      classicRun: "Classic",
      runData: "Classic",
      modernRun: false,
      ongoingRun: false,
      handleRunQuestion: false,
      handleFourthSummary: true
      }, () => {console.log(this.state);
    })
  }

  modernRunChoice() {
    console.log("Modern Run Choice Acknowledged at Parent")
    this.setState({
      modernRun: "Modern",
      runData: "Modern",
      classicRun: false,
      ongoingRun: false,
      handleRunQuestion: false,
      handleFourthSummary: true
      }, () => {console.log(this.state);
    })
  }

  ongoingRunChoice() {
    console.log("Ongoing Run Choice Acknowledged at Parent")
    this.setState({
      ongoingRun: "Ongoing",
      runData: "Ongoing",
      modernRun: false,
      classicRun: false,
      handleRunQuestion: false,
      handleFourthSummary: true
      }, () => {console.log(this.state);
    })
  }

  restartAllQuestions() {
    console.log("Reset All States")
    this.setState({
      handleFirstQuestion: false,
      handleStartingInfo: true,
      handleCharacterQuestion: false,
      handleCompanyQuestion: false,
      handleWriterQuestion: false,
      handleRunQuestion: false,
      handleFourthSummary: false,
      handleRenderDatabase: false,
      characterChoice: false,
      characterData: "",
      companyChoice: false,
      companyMarvel: "",
      companyDC: "",
      companyImage: "",
      companyOther: "",
      companyData: "",
      writerChoice: false,
      writerData: "",
      classicRun: "",
      modernRun: "",
      ongoingRun: "",
      runData: "",
      randomChoice: false,
      }, () => {console.log(this.state);
    })
  }

  handleRenderDatabase() {
    console.log("All filters done. Rendering Database")
    this.setState({
      handleRenderDatabase: true,
      handleFourthSummary: false
      }, () => {console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        <center>
            <div>
              <h2> Comic Book Recommendation </h2>
                <div
                  style={{
                    display: !this.state.handleStartingInfo
                      ? "none"
                      : "block"
                        }}
                      >
                  <h4> Want something to read? <br></br> </h4>
                  <p> Try something from Matthew's curated list </p>
                    <button
                      onClick={this.handleFirstQuestion}
                      >
                      Start!
                    </button>
                  <p> </p>
                </div>

                <div>
                  {Database.map(Database =>
                    <div>
                      {this.state.handleRenderDatabase && this.state.characterData === Database.character[0] && this.state.runData === Database.run
                        ? <div>
                          <CardDatabase
                            title={Database.title}
                            writer={Database.writer[Database.writer.length - 1]}
                            artist={Database.artist[0]}
                            length={Database.length}
                            synopsis={Database.synopsis}
                          />
                          <br></br>
                          </div>
                        : null
                      }
                    </div>)}

                  {Database.map(Database =>
                    <div>
                      {this.state.handleRenderDatabase && this.state.writerData === Database.writer[0]
                        ? <div>
                          <CardDatabase
                            title={Database.title}
                            writer={Database.writer[Database.writer.length - 1]}
                            artist={Database.artist[0]}
                            length={Database.length}
                            synopsis={Database.synopsis}
                          />
                          <br></br>
                          </div>
                        : null
                      }
                    </div>)}

                  {Database.map(Database =>
                    <div>
                      {this.state.handleRenderDatabase && this.state.companyData === Database.company && this.state.runData === Database.run
                        ? <div>
                          <CardDatabase
                            title={Database.title}
                            writer={Database.writer[Database.writer.length - 1]}
                            artist={Database.artist[0]}
                            length={Database.length}
                            synopsis={Database.synopsis}
                          />
                          <br></br>
                          </div>
                        : null
                      }
                    </div>)}
                </div>
                <br></br>

              {this.state.handleFirstQuestion
                ? <FirstQuestionBox
                    characterChoice = {this.characterChoice}
                    companyChoice = {this.companyChoice}
                    writerChoice = {this.writerChoice}
                    />
                : null}
              {!this.state.handleFirstQuestion && this.state.handleCharacterQuestion
                ? <SecondQuestionCharacter
                    handleCharacterQuestion = {this.handleCharacterQuestion}
                    characterDataUpdate = {this.characterDataUpdate.bind(this)}
                    />
                : null
              }
              {!this.state.handleFirstQuestion && this.state.handleCompanyQuestion
                ? <SecondQuestionCompany
                    companyMarvelChoice = {this.companyMarvel}
                    companyDCChoice = {this.companyDC}
                    companyImageChoice = {this.companyImage}
                    companyOtherChoice = {this.companyOther}
                    />
                : null
              }
              {!this.state.handleFirstQuestion && this.state.writerChoice
                ? <SecondQuestionWriter
                    handleWriterQuestion = {this.handleWriterQuestion}
                    writerDataUpdate = {this.writerDataUpdate.bind(this)}
                  />
                : null
              }
              {!this.state.handleFirstQuestion && !this.state.handleCompanyQuestion && !this.state.handleCharacterQuestion && this.state.handleRunQuestion
                ? <ThirdQuestionRun
                    classicRunChoice = {this.classicRun}
                    modernRunChoice = {this.modernRun}
                    ongoingRunChoice = {this.ongoingRun}
                />
                : null
              }
              {this.state.handleFourthSummary
                ? <FourthSummary
                  handleRenderDatabase = {this.handleRenderDatabase}
                />
                : null
              }
              {this.state.handleRenderDatabase
                ? <RestartButton
                  restartAllQuestions = {this.restartAllQuestions.bind(this)}
                />
                : null
              }
              <br></br>
            </div>
        </center>
      </div>
    )
  }
}

class FirstQuestionBox extends React.Component {
  constructor() {
    super();
    this.state = {
      characterStatus: "false",
      companyStatus: "false",
      writerStatus: "false"
    };
    this.characterStatus = this.characterStatus.bind(this)
    this.companyStatus = this.companyStatus.bind(this)
    this.writerStatus = this.writerStatus.bind(this)
  }

  characterStatus() {
    console.log("Character Chosen Button")
    this.setState({
      characterStatus: true,
      companyStatus: false,
      writerStatus: false
      }, () => {console.log(this.state);
      });
    console.log(this.state)
  }

  companyStatus() {
    console.log("Company Chosen Button")
    this.setState({
      characterStatus: false,
      companyStatus: true,
      writerStatus: false
      }, () => {console.log(this.state);
      });
    console.log(this.state)
  }

  writerStatus() {
    console.log("Writer Chosen Button")
    this.setState({
      characterStatus: false,
      companyStatus: false,
      writerStatus: true
      }, () => {console.log(this.state);
      });
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <div
          className="FirstQuestionBoxCharacterStyles"
          style={{
            display: this.state.characterStatus
              ? "block"
              : "none"
                }}
          >
          <CardQuestion
            title="Character"
            text="Do you want to search by character?"
            />
          <button onClick={this.props.characterChoice}> Choose By Character </button>
        </div>
        <div
          className="FirstQuestionBoxCompanyStyles"
          style={{
            display: this.state.companyStatus
              ? "block"
              : "none"
                }}
          >
          <CardQuestion
            title="Company"
            text="Do you want to search by company?"
            />
          <button onClick={this.props.companyChoice}> Choose By Company </button>
        </div>
        <div
          className="FirstQuestionBoxWriterStyles"
          style={{
            display: this.state.writerStatus
              ? "block"
              : "none"
                }}>
          <CardQuestion
            title="Writer"
            text="Do you want to search by writer?"
            />
          <button onClick={this.props.writerChoice}> Choose By Writer </button>
        </div>
      </div>
    )
  }
}

export default ChoiceBar;
