<<<<<<< Updated upstream
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
=======
import React from 'react'
import axios from 'axios'
import ChoiceBarStyles from './CSSFiles/ChoiceBarStyles.css'
import CardQuestion from "./CardQuestion.js"
import CardDatabase from "./CardDatabase.js"
>>>>>>> Stashed changes
import FourthSummary from './FourthSummary.js'
import RestartButton from "./RestartButton.js"
<<<<<<< Updated upstream
import Images from "./ImageDatabase.js"
=======
import SecondQuestionWriter from './SecondQuestionWriter.js'
import SecondQuestionCharacter from './SecondQuestionCharacter.js'
import ThirdAppearanceQuestion from './ThirdAppearanceQuestion.js'
>>>>>>> Stashed changes

class ChoiceBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handleFirstQuestion: false,
      handleStartingInfo: true,
      handleCharacterQuestion: false,
      handleWriterQuestion: false,
      handleSeriesQuestion: false,
      handleFourthSummary: false,
      handleRenderDatabase: false,
      characterChoice: false,
      characterData: "",
      writerChoice: false,
      writerFirstNameData: "",
      writerLastNameData: "",
      eventChoice: false,
      seriesChoice: false,
      randomChoice: false,
    };
    this.handleFirstQuestion = this.handleFirstQuestion.bind(this)
    this.handleFourthSummary = this.fromWriterToFourth.bind(this)
    this.writerChoice = this.writerChoice.bind(this)
    this.characterData = this.characterDataUpdate.bind(this)
    this.writerFirstNameData = this.writerFirstNameDataUpdate.bind(this)
    this.writerLastNameData = this.writerLastNameDataUpdate.bind(this)
    this.seriesChoice = this.seriesChoice.bind(this)
    this.eventChoice = this.eventChoice.bind(this)
    this.handleRenderDatabase = this.handleRenderDatabase.bind(this)
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
    console.log("Character Data Input Finished and moving to Series Question")
    this.setState({
      handleCharacterQuestion: false,
      handleSeriesQuestion: true
      }, () => {console.log(this.state);
    });
  }

  fromWriterToFourth() {
    console.log("Writer Data Input Finished and moving on")
    this.setState({
      handleWriterQuestion: false,
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

  writerFirstNameDataUpdate(writerFirstNameData) {
    console.log("Writer First Name Data Update from SecondQuestionWriter component")
    this.setState({
      writerFirstNameData: writerFirstNameData
    }, () => {console.log(this.state);
    })
  }

  writerLastNameDataUpdate(writerLastNameData) {
    console.log("Writer Last Name Data Update from SecondQuestionWriter component")
    this.setState({
      writerLastNameData: writerLastNameData
    }, () => {console.log(this.state);
    })
  }

  seriesChoice() {
    console.log("Series chosen and going to Fourth Summary")
    this.setState({
      handleSeriesQuestion: false,
      seriesChoice: true,
      handleFourthSummary: true
    }, () => {console.log(this.state);
    })
  }

  eventChoice() {
    console.log("Series chosen and going to Fourth Summary")
    this.setState({
      handleSeriesQuestion: false,
      eventChoice: true,
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
      handleWriterQuestion: false,
      handleFourthSummary: false,
      handleRenderDatabase: false,
      characterChoice: false,
      characterData: "",
      writerChoice: false,
      writerData: "",
      randomChoice: false,
      }, () => {console.log(this.state);
    })
  }

  handleRenderDatabase = async() => {
    console.log("All filters done. Rendering Database");
    this.setState({
      handleRenderDatabase: true,
      handleFourthSummary: false
      }, () => {console.log(this.state);
    });
    if (this.state.writerChoice === true) {
      const baseWriterData = await axios.get('https://gateway.marvel.com:443/v1/public/creators?firstName=' + this.state.writerFirstNameData + '&lastName=' + this.state.writerLastNameData + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      const dataWriterInfo = (Object.values(baseWriterData.data.data.results[0]))
      const dataWriterID = dataWriterInfo[0]
      const dataWriterFirstName = dataWriterInfo[1]
      const dataWriterLastName = dataWriterInfo[3]
      const data2 = baseWriterData.data.data.results[0]
      const dataSeriesNumbers = data2.series.available
      const dataSeriesTitles = data2.series.items

      const dataSeriesTitle1 = dataSeriesTitles[(Math.floor(Math.random() * (dataSeriesTitles.length)))]
      const dataSeriesTitle1Data = await axios.get('https://gateway.marvel.com:443/v1/public/series?titleStartsWith=' + dataSeriesTitle1.name.substr(0,7) + '&creators=' + dataWriterID + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      if (dataSeriesTitle1Data.data.data.results[0]) {
        const dataSeriesTitle1Data2 = dataSeriesTitle1Data.data.data.results[0]
        const dataSeriesTitle1Desc = dataSeriesTitle1Data2.description
        if (dataSeriesTitle1Desc) {
          this.setState({
            apiDataSeriesTitle1Description: dataSeriesTitle1Desc,
          }, () => {console.log(this.state)
          });
        } else {
          this.setState({
            apiDataSeriesTitle1Description: "Unavailable"
          }, () => {console.log(this.state)
          });
        }
        this.setState({
          apiDataSeriesTitle1: dataSeriesTitle1.name,
          apiDataSeriesTitle1Data2: dataSeriesTitle1Data2,
          apiDataSeriesTitle1StartYear: dataSeriesTitle1Data2.startYear,
          apiDataSeriesTitle1EndYear: dataSeriesTitle1Data2.endYear,
          apiDataSeriesTitle1Thumbnail: dataSeriesTitle1Data2.thumbnail.path,
          apiDataSeriesTitle1Ready: true
        }, () => {console.log(this.state);
          console.log('Series #1 rendered')
        });
      } else {
        console.log("Series #1 not rendered")
      }

      const dataSeriesTitle2 = dataSeriesTitles[(Math.floor(Math.random() * (dataSeriesTitles.length)))]
      const dataSeriesTitle2Data = await axios.get('https://gateway.marvel.com:443/v1/public/series?titleStartsWith=' + dataSeriesTitle2.name.substr(0,7) + '&creators=' + dataWriterID + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      console.log(dataSeriesTitle2Data)
      if (dataSeriesTitle2Data.data.data.results[0]) {
        const dataSeriesTitle2Data2 = dataSeriesTitle2Data.data.data.results[0]
        const dataSeriesTitle2Desc = dataSeriesTitle2Data2.description
        if (dataSeriesTitle2Desc) {
          this.setState({
            apiDataSeriesTitle2Description: dataSeriesTitle2Desc,
          }, () => {console.log(this.state)
          });
        } else {
          this.setState({
            apiDataSeriesTitle2Description: "Unavailable"
          }, () => {console.log(this.state)
          });
        }
        this.setState({
          apiDataSeriesTitle2: dataSeriesTitle2.name,
          apiDataSeriesTitle2Description: dataSeriesTitle2Desc,
          apiDataSeriesTitle2Data2: dataSeriesTitle2Data2,
          apiDataSeriesTitle2StartYear: dataSeriesTitle2Data2.startYear,
          apiDataSeriesTitle2EndYear: dataSeriesTitle2Data2.endYear,
          apiDataSeriesTitle2Thumbnail: dataSeriesTitle2Data2.thumbnail.path,
          apiDataSeriesTitle2Ready: true
        }, () => {console.log(this.state);
          console.log('Series #2 rendered')
        });
      } else {
        console.log('Series #2 not rendered')
      }


      const dataSeriesTitle3 = dataSeriesTitles[(Math.floor(Math.random() * (dataSeriesTitles.length)))]
      const dataSeriesTitle3Data = await axios.get('https://gateway.marvel.com:443/v1/public/series?titleStartsWith=' + dataSeriesTitle3.name.substr(0,7) + '&creators=' + dataWriterID + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      if (dataSeriesTitle3Data.data.data.results[0]) {
        const dataSeriesTitle3Data2 = dataSeriesTitle3Data.data.data.results[0]
        const dataSeriesTitle3Desc = dataSeriesTitle3Data2.description
        if (dataSeriesTitle3Desc) {
          this.setState({
            apiDataSeriesTitle3Description: dataSeriesTitle3Desc,
          }, () => {console.log(this.state)
          });
        } else {
          this.setState({
            apiDataSeriesTitle3Description: "Unavailable"
          }, () => {console.log(this.state)
          });
        }
        this.setState({
          apiDataSeriesTitle3: dataSeriesTitle3.name,
          apiDataSeriesTitle3Description: dataSeriesTitle3Desc,
          apiDataSeriesTitle3Data2: dataSeriesTitle3Data2,
          apiDataSeriesTitle3StartYear: dataSeriesTitle3Data2.startYear,
          apiDataSeriesTitle3EndYear: dataSeriesTitle3Data2.endYear,
          apiDataSeriesTitle3Thumbnail: dataSeriesTitle3Data2.thumbnail.path,
          apiDataSeriesTitle3Ready: true
        }, () => {console.log(this.state);
        console.log('Series #3 rendered')
      });
    } else {
      console.log('Series #3 not rendered')
    }

      const dataSeriesTitle4 = dataSeriesTitles[(Math.floor(Math.random() * (dataSeriesTitles.length)))]
      const dataSeriesTitle4Data = await axios.get('https://gateway.marvel.com:443/v1/public/series?titleStartsWith=' + dataSeriesTitle4.name.substr(0,7) + '&creators=' + dataWriterID + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      if (dataSeriesTitle4Data.data.data.results[0]) {
        const dataSeriesTitle4Data2 = dataSeriesTitle4Data.data.data.results[0]
        const dataSeriesTitle4Desc = dataSeriesTitle4Data2.description
        if (dataSeriesTitle4Desc) {
          this.setState({
            apiDataSeriesTitle4Description: dataSeriesTitle4Desc,
          }, () => {console.log(this.state)
          });
        } else {
          this.setState({
            apiDataSeriesTitle4Description: "Unavailable"
          }, () => {console.log(this.state)
          });
        }
        this.setState({
          apiDataSeriesTitle4: dataSeriesTitle4.name,
          apiDataSeriesTitle4Description: dataSeriesTitle4Desc,
          apiDataSeriesTitle4Data2: dataSeriesTitle4Data2,
          apiDataSeriesTitle4StartYear: dataSeriesTitle4Data2.startYear,
          apiDataSeriesTitle4EndYear: dataSeriesTitle4Data2.endYear,
          apiDataSeriesTitle4Thumbnail: dataSeriesTitle4Data2.thumbnail.path,
          apiDataSeriesTitle4Ready: true
        }, () => {console.log(this.state);
        console.log('Series #4 rendered')
      });
    } else {
      console.log('Series #4 not rendered')
    }

      const dataEventsTitle1Data = await axios.get('https://gateway.marvel.com:443/v1/public/creators/' + dataWriterID + '/events?ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      if (dataEventsTitle1Data.data.data.results[0]) {
        const dataEventsTitle1Data2 = dataEventsTitle1Data.data.data.results
        const dataEventsTitle1Data3 = dataEventsTitle1Data2[(Math.floor(Math.random() * (dataEventsTitle1Data2.length)))]
        console.log(dataEventsTitle1Data3)
        const dataEventsTitle1Title = dataEventsTitle1Data3.title
        const dataEventsTitle1Desc = dataEventsTitle1Data3.description
        const dataEventsTitle1StartYear = dataEventsTitle1Data3.start
        String(dataEventsTitle1StartYear).substr(0, 4)
        const dataEventsTitle1EndYear = dataEventsTitle1Data3.end
        String(dataEventsTitle1EndYear).substr(0, 4)
        if (dataEventsTitle1Desc) {
          this.setState({
            apiDataEventsTitle1Description: dataEventsTitle1Desc,
          }, () => {console.log(this.state)
          });
        } else {
          this.setState({
            apiDataEventsTitle1Description: "Unavailable"
          }, () => {console.log(this.state)
          });
        }
        this.setState({
          apiDataEventsTitle1Data2: dataEventsTitle1Data2,
          apiDataEventsTitle1Title: dataEventsTitle1Data3.title,
          apiDataEventsTitle1Description: dataEventsTitle1Desc,
          apiDataEventsTitle1StartYear: dataEventsTitle1Data3.start,
          apiDataEventsTitle1EndYear: dataEventsTitle1Data3.end,
          apiDataEventsTitle1Thumbnail: dataEventsTitle1Data3.thumbnail.path,
          apiDataEventsTitle1Ready: true
        }, () => {console.log(this.state);
        console.log('Event #1 rendered')
        console.log(dataEventsTitle1StartYear)
        console.log(dataEventsTitle1EndYear)
      });
    } else {
      console.log('Event #1 not rendered')
    }

      const dataEventsTitle2Data = await axios.get('https://gateway.marvel.com:443/v1/public/creators/' + dataWriterID + '/events?ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      if (dataEventsTitle2Data.data.data.results[0]) {
        const dataEventsTitle2Data2 = dataEventsTitle2Data.data.data.results
        const dataEventsTitle2Data3 = dataEventsTitle2Data2[(Math.floor(Math.random() * (dataEventsTitle2Data2.length)))]
        const dataEventsTitle2Desc = dataEventsTitle2Data3.description
        if (dataEventsTitle2Desc) {
          this.setState({
            apiDataEventsTitle2Description: dataEventsTitle2Desc,
          }, () => {console.log(this.state)
          });
        } else {
          this.setState({
            apiDataEventsTitle2Description: "Unavailable"
          }, () => {console.log(this.state)
          });
        }
        this.setState({
          apiDataEventsTitle2Data2: dataEventsTitle2Data2,
          apiDataEventsTitle2Title: dataEventsTitle2Data3.title,
          apiDataEventsTitle2Description: dataEventsTitle2Desc,
          apiDataEventsTitle2StartYear: dataEventsTitle2Data3.start,
          apiDataEventsTitle2EndYear: dataEventsTitle2Data3.end,
          apiDataEventsTitle2Thumbnail: dataEventsTitle2Data3.thumbnail.path,
          apiDataEventsTitle2Ready: true
        }, () => {console.log(this.state);
        console.log('Event #2 rendered')
      });
    } else {
      console.log('Event #2 not rendered')
    }

      const dataEventsTitle3Data = await axios.get('https://gateway.marvel.com:443/v1/public/creators/' + dataWriterID + '/events?ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
      if (dataEventsTitle3Data.data.data.results[0]) {
        const dataEventsTitle3Data2 = dataEventsTitle3Data.data.data.results
        const dataEventsTitle3Data3 = dataEventsTitle3Data2[(Math.floor(Math.random() * (dataEventsTitle3Data2.length)))]
        const dataEventsTitle3Desc = dataEventsTitle3Data3.description
        if (dataEventsTitle3Desc) {
          this.setState({
            apiDataEventsTitle3Description: dataEventsTitle3Desc,
          }, () => {console.log(this.state)
          });
        } else {
          this.setState({
            apiDataEventsTitle3Description: "Unavailable"
          }, () => {console.log(this.state)
          });
        }
        this.setState({
          apiDataEventsTitle3Data2: dataEventsTitle3Data2,
          apiDataEventsTitle3Title: dataEventsTitle3Data3.title,
          apiDataEventsTitle3Description: dataEventsTitle3Desc,
          apiDataEventsTitle3StartYear: dataEventsTitle3Data3.start,
          apiDataEventsTitle3EndYear: dataEventsTitle3Data3.end,
          apiDataEventsTitle3Thumbnail: dataEventsTitle3Data3.thumbnail.path,
          apiDataEventsTitle3Ready: true
        }, () => {console.log(this.state);
        console.log('Event #3 rendered')
      });
    } else {
      console.log('Event #3 not rendered')
    }
      this.setState({
        apiData: baseWriterData,
        apiDataWriterFirstName: dataWriterFirstName,
        apiDataWriterLastName: dataWriterLastName,
        apiDataSeriesNumbers: dataSeriesNumbers,
        apiDataSeriesTitles: dataSeriesTitles,
        apiDataSeriesTitle1: dataSeriesTitle1.name,
        apiDataReady: true
      }, () => {console.log(this.state);
      });
    } else if (this.state.characterChoice === true && this.state.eventChoice === true) {
        console.log("Character/Event Choice going through")
        const data = await axios.get('https://gateway.marvel.com:443/v1/public/characters?name=' + this.state.characterData + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const data2 = data.data.data.results[0]
        const characterID = data2.id

        const eventData = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/events?ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const eventData2 = eventData.data.data.results
        console.log(eventData)
        console.log(eventData2)

        const eventTitle1Data = eventData2[(Math.floor(Math.random() * (eventData2.length)))]
        const eventTitle1Writer = eventTitle1Data.creators.items
        if (eventTitle1Writer) {
          eventTitle1Writer.map(eventTitle1Writer => {
            if (eventTitle1Writer.role == 'writer') {
              this.setState({
                apiDataEventTitle1Writer: eventTitle1Writer.name
              }, () => {console.log(this.state);
              })
            } else {
              console.log('Not the writer')
            }
          })
        }
        this.setState({
          apiDataEventTitle1Title: eventTitle1Data.title,
          apiDataEventTitle1Thumbnail: eventTitle1Data.thumbnail.path,
          apiDataEventTitle1Desc: eventTitle1Data.description,
          apiDataEventTitle1Start: eventTitle1Data.start,
          apiDataEventTitle1End: eventTitle1Data.end,
        }, () => {console.log(this.state);
        })

        //

        const eventTitle2Data = eventData2[(Math.floor(Math.random() * (eventData2.length)))]
        const eventTitle2Writer = eventTitle2Data.creators.items
        if (eventTitle2Writer) {
          eventTitle2Writer.map(eventTitle2Writer => {
            if (eventTitle2Writer.role == 'writer') {
              this.setState({
                apiDataEventTitle2Writer: eventTitle2Writer.name
              }, () => {console.log(this.state);
              })
            } else {
              console.log('Not the writer')
            }
          })
        }
        this.setState({
          apiDataEventTitle2Title: eventTitle2Data.title,
          apiDataEventTitle2Thumbnail: eventTitle2Data.thumbnail.path,
          apiDataEventTitle2Desc: eventTitle2Data.description,
          apiDataEventTitle2Start: eventTitle2Data.start,
          apiDataEventTitle2End: eventTitle2Data.end,
        }, () => {console.log(this.state);
        })

        //

        const eventTitle3Data = eventData2[(Math.floor(Math.random() * (eventData2.length)))]
        const eventTitle3Writer = eventTitle3Data.creators.items
        if (eventTitle3Writer) {
          eventTitle3Writer.map(eventTitle3Writer => {
            if (eventTitle3Writer.role == 'writer') {
              this.setState({
                apiDataEventTitle3Writer: eventTitle3Writer.name
              }, () => {console.log(this.state);
              })
            } else {
              console.log('Not the writer')
            }
          })
        }
        this.setState({
          apiDataEventTitle3Title: eventTitle3Data.title,
          apiDataEventTitle3Thumbnail: eventTitle3Data.thumbnail.path,
          apiDataEventTitle3Desc: eventTitle3Data.description,
          apiDataEventTitle3Start: eventTitle3Data.start,
          apiDataEventTitle3End: eventTitle3Data.end,
        }, () => {console.log(this.state);
        })

        //

        const eventTitle4Data = eventData2[(Math.floor(Math.random() * (eventData2.length)))]
        const eventTitle4Writer = eventTitle4Data.creators.items
        if (eventTitle4Writer) {
          eventTitle4Writer.map(eventTitle4Writer => {
            if (eventTitle4Writer.role == 'writer') {
              this.setState({
                apiDataEventTitle4Writer: eventTitle4Writer.name
              }, () => {console.log(this.state);
              })
            } else {
              console.log('Not the writer')
            }
          })
        }
        this.setState({
          apiDataEventTitle4Title: eventTitle4Data.title,
          apiDataEventTitle4Thumbnail: eventTitle4Data.thumbnail.path,
          apiDataEventTitle4Desc: eventTitle4Data.description,
          apiDataEventTitle4Start: eventTitle4Data.start,
          apiDataEventTitle4End: eventTitle4Data.end,
        }, () => {console.log(this.state);
        })
        this.setState({
          apiDataReady: true
        }, () => {console.log(this.state);
        });
        //

    } else if (this.state.characterChoice === true && this.state.seriesChoice === true) {
        const data = await axios.get('https://gateway.marvel.com:443/v1/public/characters?name=' + this.state.characterData + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const data2 = data.data.data.results[0]
        const data3 = data2.series.items
        const characterID = data2.id

        //

        const characterSeriesAData = data3[(Math.floor(Math.random() * (data3.length)))]
        const characterSeriesAData2 = characterSeriesAData.name
        const characterSeriesAData3 = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + characterSeriesAData2.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const characterSeriesAData4 = characterSeriesAData3.data.data.results[0]
        if (characterSeriesAData4) {
          const characterSeriesAWriter = characterSeriesAData4.creators.items
          characterSeriesAWriter.map(characterSeriesAWriter => {
            if (characterSeriesAWriter.role == 'writer') {
              this.setState({
                apiDataSeriesAWriter: characterSeriesAWriter.name
              }, () => {console.log(this.state)
              });
            } else {
              console.log('Not the writer')
            }
          })
          const characterSeriesADesc = characterSeriesAData4.description
            if (characterSeriesADesc) {
              this.setState({
                apiDataSeriesADescription: characterSeriesADesc,
              }, () => {console.log(this.state)
              });
            } else {
              this.setState({
                apiDataSeriesADescription: "Unavailable"
              }, () => {console.log(this.state)
              });
            }
          this.setState({
            apiDataSeriesATitle: characterSeriesAData4.title,
            apiDataSeriesAStartYear: characterSeriesAData4.startYear,
            apiDataSeriesAEndYear: characterSeriesAData4.endYear,
            apiDataSeriesAThumbnail: characterSeriesAData4.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series A rendering')
          })
        }

        //

        const characterSeriesBData = data3[(Math.floor(Math.random() * (data3.length)))]
        const characterSeriesBData2 = characterSeriesBData.name
        const characterSeriesBData3 = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + characterSeriesBData2.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const characterSeriesBData4 = characterSeriesBData3.data.data.results[0]
        console.log(characterSeriesBData4)
        if (characterSeriesBData4) {
          const characterSeriesBWriter = characterSeriesBData4.creators.items
          characterSeriesBWriter.map(characterSeriesBWriter => {
            if (characterSeriesBWriter.role == 'writer') {
              this.setState({
                apiDataSeriesBWriter: characterSeriesBWriter.name
              }, () => {console.log(this.state)
              });
            } else {
              console.log('Not the writer')
            }
          })
          const characterSeriesBDesc = characterSeriesBData4.description
          if (characterSeriesBDesc) {
            this.setState({
              apiDataSeriesBDescription: characterSeriesBDesc,
            }, () => {console.log(this.state)
            });
          } else {
            this.setState({
              apiDataSeriesBDescription: "Unavailable"
            }, () => {console.log(this.state)
            });
          }
          this.setState({
            apiDataSeriesBTitle: characterSeriesBData4.title,
            apiDataSeriesBStartYear: characterSeriesBData4.startYear,
            apiDataSeriesBEndYear: characterSeriesBData4.endYear,
            apiDataSeriesBThumbnail: characterSeriesBData4.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series B rendering')
          })
        }

        //

        const characterSeriesCData = data3[(Math.floor(Math.random() * (data3.length)))]
        const characterSeriesCData2 = characterSeriesCData.name
        const characterSeriesCData3 = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + characterSeriesCData2.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const characterSeriesCData4 = characterSeriesCData3.data.data.results[0]
        if (characterSeriesCData4) {
          const characterSeriesCWriter = characterSeriesCData4.creators.items
          characterSeriesCWriter.map(characterSeriesCWriter => {
            if (characterSeriesCWriter.role == 'writer') {
              this.setState({
                apiDataSeriesCWriter: characterSeriesCWriter.name
              }, () => {console.log(this.state)
              });
            } else {
              console.log('Not the writer')
            }
          })
          const characterSeriesCDesc = characterSeriesCData4.description
          if (characterSeriesCDesc) {
            this.setState({
              apiDataSeriesCDescription: characterSeriesCDesc,
            }, () => {console.log(this.state)
            });
          } else {
            this.setState({
              apiDataSeriesCDescription: "Unavailable"
            }, () => {console.log(this.state)
            });
          }
          this.setState({
            apiDataSeriesCTitle: characterSeriesCData4.title,
            apiDataSeriesCStartYear: characterSeriesCData4.startYear,
            apiDataSeriesCEndYear: characterSeriesCData4.endYear,
            apiDataSeriesCThumbnail: characterSeriesCData4.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series C rendering')
          })
        }

        //

        const characterSeriesDData = data3[(Math.floor(Math.random() * (data3.length)))]
        const characterSeriesDData2 = characterSeriesDData.name
        const characterSeriesDData3 = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + characterSeriesDData2.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const characterSeriesDData4 = characterSeriesDData3.data.data.results[0]
        if (characterSeriesDData4) {
          const characterSeriesDWriter = characterSeriesDData4.creators.items
          characterSeriesDWriter.map(characterSeriesDWriter => {
            if (characterSeriesDWriter.role == 'writer') {
              this.setState({
                apiDataSeriesDWriter: characterSeriesDWriter.name
              }, () => {console.log(this.state)
              });
            } else {
              console.log('Not the writer')
            }
          })
          const characterSeriesDDesc = characterSeriesDData4.description
            if (characterSeriesDDesc) {
              this.setState({
                apiDataSeriesDDescription: characterSeriesDDesc,
              }, () => {console.log(this.state)
              });
            } else {
              this.setState({
                apiDataSeriesDDescription: "Unavailable"
              }, () => {console.log(this.state)
              });
            }
          this.setState({
            apiDataSeriesDTitle: characterSeriesDData4.title,
            apiDataSeriesDStartYear: characterSeriesDData4.startYear,
            apiDataSeriesDEndYear: characterSeriesDData4.endYear,
            apiDataSeriesDThumbnail: characterSeriesDData4.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series D rendering')
          })
        }

        //

        const characterSeries1Data = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + this.state.characterData.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        console.log(characterSeries1Data)
        const characterSeries1Data2 = characterSeries1Data.data.data.results
        const characterSeries1Data3 = characterSeries1Data2[(Math.floor(Math.random() * (characterSeries1Data2.length)))]

        if (characterSeries1Data3) {
          const characterSeries1Writer = characterSeries1Data3.creators.items
          characterSeries1Writer.map(characterSeries1Writer => {
            if (characterSeries1Writer.role == 'writer') {
              this.setState({
                apiDataSeries1Writer: characterSeries1Writer.name
              }, () => {console.log(this.state);
            });
          } else {
            console.log('Not the writer')
          }
          })
          const characterSeries1Desc = characterSeries1Data3.description
            if (characterSeries1Desc) {
              this.setState({
                apiDataSeries1Description: characterSeries1Desc,
              }, () => {console.log(this.state)
              });
            } else {
              this.setState({
                apiDataSeries1Description: "Unavailable"
              }, () => {console.log(this.state)
              });
            }
          this.setState({
            apiDataSeries1Title: characterSeries1Data3.title,
            apiDataSeries1StartYear: characterSeries1Data3.startYear,
            apiDataSeries1EndYear: characterSeries1Data3.endYear,
            apiDataSeries1Thumbnail: characterSeries1Data3.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series #1 via Title is rendering')
        });

        //

        const characterSeries2Data = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + this.state.characterData.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const characterSeries2Data2 = characterSeries2Data.data.data.results
        const characterSeries2Data3 = characterSeries2Data2[(Math.floor(Math.random() * (characterSeries2Data2.length)))]

        if (characterSeries2Data3) {
          const characterSeries2Writer = characterSeries2Data3.creators.items
          characterSeries2Writer.map(characterSeries2Writer => {
            if (characterSeries2Writer.role == 'writer') {
              this.setState({
                apiDataSeries2Writer: characterSeries2Writer.name
              }, () => {console.log(this.state);
            });
          } else {
            console.log('Not the writer')
          }
          })
          const characterSeries2Desc = characterSeries2Data3.description
            if (characterSeries2Desc) {
              this.setState({
                apiDataSeries2Description: characterSeries2Desc,
              }, () => {console.log(this.state)
              });
            } else {
              this.setState({
                apiDataSeries2Description: "Unavailable"
              }, () => {console.log(this.state)
              });
            }
          this.setState({
            apiDataSeries2Title: characterSeries2Data3.title,
            apiDataSeries2StartYear: characterSeries2Data3.startYear,
            apiDataSeries2EndYear: characterSeries2Data3.endYear,
            apiDataSeries2Thumbnail: characterSeries2Data3.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series #2 via Title rendering')
        });

        //

        const characterSeries3Data = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + this.state.characterData.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const characterSeries3Data2 = characterSeries3Data.data.data.results
        const characterSeries3Data3 = characterSeries3Data2[(Math.floor(Math.random() * (characterSeries3Data2.length)))]

        if (characterSeries3Data3) {
          const characterSeries3Writer = characterSeries3Data3.creators.items
          characterSeries3Writer.map(characterSeries3Writer => {
            if (characterSeries3Writer.role == 'writer') {
              this.setState({
                apiDataSeries3Writer: characterSeries3Writer.name
              }, () => {console.log(this.state);
            });
          } else {
            console.log('Not the writer')
          }
          })
          const characterSeries3Desc = characterSeries3Data3.description
            if (characterSeries3Desc) {
              this.setState({
                apiDataSeries3Description: characterSeries3Desc,
              }, () => {console.log(this.state)
              });
            } else {
              this.setState({
                apiDataSeries3Description: "Unavailable"
              }, () => {console.log(this.state)
              });
            }
          this.setState({
            apiDataSeries3Title: characterSeries3Data3.title,
            apiDataSeries3StartYear: characterSeries3Data3.startYear,
            apiDataSeries3EndYear: characterSeries3Data3.endYear,
            apiDataSeries3Thumbnail: characterSeries3Data3.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series #3 via Title rendering')
        });

        //

        const characterSeries4Data = await axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterID + '/series?titleStartsWith=' + this.state.characterData.substr(0, 7) + '&ts=matthew&apikey=e7161ad7adb1a5afd397af166032404d&hash=e6eef23d5cec0694728d2a4f9c807667')
        const characterSeries4Data2 = characterSeries4Data.data.data.results
        const characterSeries4Data3 = characterSeries4Data2[(Math.floor(Math.random() * (characterSeries4Data2.length)))]

        if (characterSeries4Data3) {
          const characterSeries4Writer = characterSeries4Data3.creators.items
          characterSeries4Writer.map(characterSeries4Writer => {
            if (characterSeries4Writer.role == 'writer') {
              this.setState({
                apiDataSeries4Writer: characterSeries4Writer.name
              }, () => {console.log(this.state);
            });
          } else {
            console.log('Not the writer')
          }
          })
          const characterSeries4Desc = characterSeries4Data3.description
            if (characterSeries4Desc) {
              this.setState({
                apiDataSeries4Description: characterSeries4Desc,
              }, () => {console.log(this.state)
              });
            } else {
              this.setState({
                apiDataSeries4Description: "Unavailable"
              }, () => {console.log(this.state)
              });
            }
          this.setState({
            apiDataSeries4Title: characterSeries4Data3.title,
            apiDataSeries4StartYear: characterSeries4Data3.startYear,
            apiDataSeries4EndYear: characterSeries4Data3.endYear,
            apiDataSeries4Thumbnail: characterSeries4Data3.thumbnail.path
          }, () => {console.log(this.state);
            console.log('Series #4 via Title rendering')
        });

        //

        this.setState({
          apiDataReady: true
        }, () => {console.log(this.state);
          console.log(data2)
        });
    } else {
      console.log('All good on this end')
    }

  }}}}}

  render() {
    return (
      <div>
        <center>
            <div>
              <h1> Comic Book Recommendation 2.0 (Marvel) </h1>
                <div
                  style={{
                    display: !this.state.handleStartingInfo
                      ? "none"
                      : "block"
                        }}
                      >
                  <h2> Want something to read? <br></br> </h2>
                  <p class="ChoiceBarIntro"> Try something from Matthew's curated list </p>
                    <button class="StartButton"
                      onClick={this.handleFirstQuestion}
                      >
                      Start!
                    </button>
                  <p> Note: <br></br>
                      2.0 is refactored code to showcase API proficiency. <br></br>
                      However, this requires various changes to what is recommended.
                  </p>
                </div>
              {this.state.handleFirstQuestion
                ? <FirstQuestionBox
                    characterChoice = {this.characterChoice.bind(this)}
                    writerChoice = {this.writerChoice.bind(this)}
                    />
                : null
              }
              {this.state.handleCharacterQuestion
                ? <SecondQuestionCharacter
                    handleCharacterQuestion = {this.handleCharacterQuestion.bind(this)}
                    characterDataUpdate = {this.characterData.bind(this)}
                    />
                : null
              }
              {this.state.handleWriterQuestion
                ? <SecondQuestionWriter
                    writerFirstNameDataUpdate = {this.writerFirstNameData.bind(this)}
                    writerLastNameDataUpdate = {this.writerLastNameData.bind(this)}
                    fromWriterToFourth = {this.handleFourthSummary.bind(this)}
                    />
                : null
              }
              {this.state.handleSeriesQuestion
                ? <ThirdAppearanceQuestion
                    seriesChoice = {this.seriesChoice.bind(this)}
                    eventChoice = {this.eventChoice.bind(this)}
                    />
                : null
              }
              {this.state.handleFourthSummary
                ? <FourthSummary
                    handleRenderDatabase = {this.handleRenderDatabase.bind(this)}
                    />
                : null
              }
              {this.state.apiDataReady && this.state.characterChoice && this.state.eventChoice
                ? <div>
                  </div>
                : null
              }
              {this.state.apiDataReady && this.state.characterChoice && this.state.seriesChoice
                ? <div>
                  </div>
                : null
              }
              {this.state.apiDataReady
                && this.state.writerChoice
                && this.state.apiDataSeriesTitle1Ready
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeriesTitle1Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeriesTitle1} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataWriterFirstName} {this.state.apiDataWriterLastName}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeriesTitle1StartYear} - {this.state.apiDataSeriesTitle1EndYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-desc">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeriesTitle1Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }
              {this.state.apiDataReady
                && this.state.writerChoice
                && this.state.apiDataSeriesTitle1Ready
                && this.state.apiDataSeriesTitle1 !== this.state.apiDataSeriesTitle2
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeriesTitle2Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeriesTitle2} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataWriterFirstName} {this.state.apiDataWriterLastName}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeriesTitle2StartYear} - {this.state.apiDataSeriesTitle2EndYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-desc">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeriesTitle2Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }
              {this.state.apiDataReady
                && this.state.writerChoice
                && this.state.apiDataSeriesTitle1Ready
                && this.state.apiDataSeriesTitle1 !== this.state.apiDataSeriesTitle2
                && this.state.apiDataSeriesTitle1 !== this.state.apiDataSeriesTitle3
                && this.state.apiDataSeriesTitle2 !== this.state.apiDataSeriesTitle3
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeriesTitle3Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeriesTitle3} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataWriterFirstName} {this.state.apiDataWriterLastName}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeriesTitle3StartYear} - {this.state.apiDataSeriesTitle3EndYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-desc">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeriesTitle3Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }
              {this.state.apiDataReady
                && this.state.writerChoice
                && this.state.apiDataEventsTitle1Ready
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataEventsTitle1Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataEventsTitle1Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataWriterFirstName} {this.state.apiDataWriterLastName} (among others) <br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataEventsTitle1StartYear} - {this.state.apiDataEventsTitle1EndYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Event <br></br>
                            </tr>
                            <tr class="right-desc">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataEventsTitle1Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }
              {this.state.apiDataReady
                && this.state.writerChoice
                && this.state.apiDataEventsTitle2Ready
                && this.state.apiDataEventsTitle1Title !== this.state.apiDataEventsTitle2Title
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataEventsTitle2Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataEventsTitle2Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataWriterFirstName} {this.state.apiDataWriterLastName} (among others) <br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataEventsTitle2StartYear} - {this.state.apiDataEventsTitle2EndYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Event <br></br>
                            </tr>
                            <tr class="right-desc">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataEventsTitle2Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeries1Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeries1Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeries1Writer}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeries1StartYear} - {this.state.apiDataSeries1EndYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeries1Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                && this.state.apiDataSeries1Title !== this.state.apiDataSeries2Title
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeries2Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeries2Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeries2Writer}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeries2StartYear} - {this.state.apiDataSeries2StartYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeries2Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                && this.state.apiDataSeries1Title !== this.state.apiDataSeries2Title
                && this.state.apiDataSeries2Title !== this.state.apiDataSeries3Title
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeries3Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeries3Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeries3Writer}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeries3StartYear} - {this.state.apiDataSeries3StartYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeries3Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                && this.state.apiDataSeries1Title !== this.state.apiDataSeries2Title
                && this.state.apiDataSeries2Title !== this.state.apiDataSeries3Title
                && this.state.apiDataSeries3Title !== this.state.apiDataSeries4Title
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeries4Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeries4Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeries4Writer}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeries4StartYear} - {this.state.apiDataSeries4StartYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeries4Description} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeriesAThumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeriesATitle} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeriesAWriter}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeriesAStartYear} - {this.state.apiDataSeriesAStartYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeriesADescription} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                && this.state.apiDataSeriesATitle !== this.state.apiDataSeriesBTitle
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeriesBThumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeriesBTitle} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeriesBWriter}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeriesBStartYear} - {this.state.apiDataSeriesBStartYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeriesBDescription} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                && this.state.apiDataSeriesATitle !== this.state.apiDataSeriesBTitle
                && this.state.apiDataSeriesATitle !== this.state.apiDataSeriesCTitle
                && this.state.apiDataSeriesBTitle !== this.state.apiDataSeriesCTitle
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeriesCThumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeriesCTitle} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeriesCWriter}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeriesCStartYear} - {this.state.apiDataSeriesCStartYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeriesCDescription} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }

              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.seriesChoice
                && this.state.apiDataSeriesATitle !== this.state.apiDataSeriesBTitle
                && this.state.apiDataSeriesATitle !== this.state.apiDataSeriesCTitle
                && this.state.apiDataSeriesATitle !== this.state.apiDataSeriesDTitle
                && this.state.apiDataSeriesBTitle !== this.state.apiDataSeriesCTitle
                && this.state.apiDataSeriesBTitle !== this.state.apiDataSeriesDTitle
                && this.state.apiDataSeriesCTitle !== this.state.apiDataSeriesDTitle
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataSeriesDThumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataSeriesDTitle} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataSeriesDWriter}<br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataSeriesDStartYear} - {this.state.apiDataSeriesDStartYear}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataSeriesDDescription} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }
              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.eventChoice
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataEventTitle1Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataEventTitle1Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataEventTitle1Writer} (among others) <br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataEventTitle1Start} - {this.state.apiDataEventTitle1End}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataEventTitle1Desc} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }
              {this.state.apiDataReady
                && this.state.characterChoice
                && this.state.eventChoice
                && this.state.apiDataEventTitle1Title !== this.state.apiDataEventTitle2Title
                ? <div>
                    <table class="RenderCard">
                      <tr>
                        <td class="left-image">
                        <img class="render-image" src={this.state.apiDataEventTitle2Thumbnail + '.jpg'}/>
                        </td>

                        <td>
                          <table class="right-info">
                            <tr class="right-title">
                              <b>Title:</b><br></br> {this.state.apiDataEventTitle2Title} <br></br>
                            </tr>
                            <tr class="right-writer">
                              <br></br><b>Writer:</b><br></br> {this.state.apiDataEventTitle2Writer} (among others) <br></br>
                            </tr>
                            <tr class="right-years">
                              <br></br><b>Publishing Years:</b><br></br> {this.state.apiDataEventTitle2Start} - {this.state.apiDataEventTitle2End}<br></br>
                            </tr>
                            <tr class="right-type">
                              <br></br><b>Book Type:</b><br></br> Series <br></br>
                            </tr>
                            <tr class="right-description">
                              <br></br><b>Description:</b><br></br> {this.state.apiDataEventTitle2Desc} <br></br>
                            </tr>
                          </table>
                        </td>

                      </tr>
                    </table><br></br>
                  </div>
                : null
              }
              <br></br>
            </div>

            <div>

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
      writerStatus: "false"
    };
    this.characterStatus = this.characterStatus.bind(this)
    this.writerStatus = this.writerStatus.bind(this)
  }

  characterStatus() {
    console.log("Character Chosen Button")
    this.setState({
      characterStatus: true,
      writerStatus: false
      }, () => {console.log(this.state);
      });
    console.log(this.state)
  }

  writerStatus() {
    console.log("Writer Chosen Button")
    this.setState({
      characterStatus: false,
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
