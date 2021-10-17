import React from 'react'
import Database from './Database.js'
import SecondQuestionCharacterStyles from './CSSFiles/SecondQuestionCharacterStyles.css'

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
            <option value="Adam Strange">Adam Strange</option>
            <option value="Adam Warlock">Adam Warlock</option>
            <option value="Animal Man">Animal Man</option>
            <option value="Aquaman">Aquaman</option>
            <option value="Avengers">Avengers</option>
            <option value="Batman">Batman</option>
            <option value="Black Bolt">Black Bolt</option>
            <option value="Black Canary">Black Canary</option>
            <option value="Black Panther">Black Panther</option>
            <option value="Daredevil">Daredevil</option>
            <option value="Deathstroke">Deathstroke</option>
            <option value="Doctor Doom">Doctor Doom</option>
            <option value="Elektra">Elektra</option>
            <option value="Fantastic Four">Fantastic Four</option>
            <option value="Flash">Flash</option>
            <option value="Flash">Flash (Barry Allen)</option>
            <option value="Wally West">Flash (Wally West)</option>
            <option value="Green Arrow">Green Arrow</option>
            <option value="Green Lantern">Green Lantern </option>
            <option value="Simon Baz">Green Lantern (Simon Baz)</option>
            <option value="Jessica Cruz">Green Lantern (Jessica Cruz)</option>
            <option value="Guy Gardner">Green Lantern (Guy Gardner)</option>
            <option value="Hal Jordan">Green Lantern (Hal Jordan)</option>
            <option value="Jon Stewart">Green Lantern (Jon Stewart)</option>
            <option value="Kyle Rayner">Green Lantern (Kyle Rayner)</option>
            <option value="Hulk">The Hulk (Bruce Banner)</option>
            <option value="Iron Fist">Iron Fist</option>
            <option value="Iron Man">Iron Man</option>
            <option value="John Constantine">John Constantine</option>
            <option value="Jon Kent">Jon Kent</option>
            <option value="Joker">Joker</option>
            <option value="Justice League">Justice League</option>
            <option value="Lex Luthor">Lex Luthor</option>
            <option value="Lois Lane">Lois Lane</option>
            <option value="Mera">Mera</option>
            <option value="Miles Morales">Spider-Man (Miles Morales)</option>
            <option value="Mister Miracle">Mister Miracle</option>
            <option value="Moon Knight">Moon Knight</option>
            <option value="New Super-Man">New Super-Man</option>
            <option value="Nightwing">Nightwing</option>
            <option value="Ocean Master">Ocean Master</option>
            <option value="Red Hood">Red Hood</option>
            <option value="Robin">Robin</option>
            <option value="Sentry">The Sentry</option>
            <option value="Spider-Man">Spider-Man (Peter Parker)</option>
            <option value="Superman">Superman</option>
            <option value="Swamp Thing">Swamp Thing</option>
            <option value="Thanos">Thanos</option>
            <option value="Thor">Thor</option>
            <option value="Two-Face">Two-Face</option>
            <option value="Venom">Venom</option>
            <option value="Vision">Vision</option>
            <option value="Wolverine">Wolverine</option>
            <option value="Wonder Woman">Wonder Woman</option>
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
