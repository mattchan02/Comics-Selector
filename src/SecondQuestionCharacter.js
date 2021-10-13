<<<<<<< Updated upstream
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SecondQuestionCharacterStyles from "./SecondQuestionCharacterStyles.css"
import ThirdQuestionRun from "./ThirdQuestionRun.js"
=======
import React from 'react'
import ReactDOM from 'react-dom'
>>>>>>> Stashed changes

class SecondQuestionCharacter extends React.Component {
  constructor() {
    super();
    this.state = {
      childCharacterData: 0,
    };
    this.childCharacterData = this.setChildCharacterData.bind(this)
  }

  setChildCharacterData(event) {
    console.log("Updating childCharacterData")
    const characterData = event.currentTarget.value
    this.props.characterDataUpdate(characterData)
    this.setState({
      childCharacterData: 1
      }, () => {console.log(this.state);
    });
  }

  render() {
    return(
      <div className="SecondQuestionBox">
        <div>
        <h3> Character Choice </h3>
        <p> Please select the character/group you wish to read </p>
        <select onChange={this.setChildCharacterData.bind(this)}>
          <option> -- Please choose from below -- </option>
          <option value="Adam Warlock">Adam Warlock</option>
          <option value="Avengers">Avengers</option>
          <option value="Black Bolt">Black Bolt</option>
          <option value="Black Panther">Black Panther</option>
          <option value="Captain America">Captain America</option>
          <option value="Daredevil">Daredevil</option>
          <option value="Deadpool">Deadpool</option>
          <option value="Doctor Doom">Doctor Doom</option>
          <option value="Doctor Strange">Doctor Strange</option>
          <option value="Fantastic Four">Fantastic Four</option>
          <option value="Guardians of the Galaxy">Guardians of the Galaxy</option>
          <option value="Hawkeye">Hawkeye</option>
          <option value="Hulk">The Hulk (Bruce Banner)</option>
          <option value="Iron Fist">Iron Fist</option>
          <option value="Iron Man">Iron Man</option>
          <option value="Miles Morales">Spider-Man (Miles Morales)</option>
          <option value="Moon Knight">Moon Knight</option>
          <option value="Sentry">The Sentry</option>
          <option value="Spider-Man">Spider-Man (Peter Parker)</option>
          <option value="Thanos">Thanos</option>
          <option value="Thor">Thor</option>
          <option value="Eddie Brock">Venom (Eddie Brock)</option>
          <option value="Vision">Vision</option>
          <option value="Wolverine">Wolverine</option>
          <option value="X-Force">X-Force</option>
          <option value="X-Men">X-Men</option>
        </select>

        {this.state.childCharacterData === 1
          ? <p><button
            onClick={this.props.handleCharacterQuestion}
            >
            Submit and Continue
            </button></p>
          : null
          }
        </div>
      </div>
    )
  }
}

export default SecondQuestionCharacter
