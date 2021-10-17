import React from 'react'
import SecondQuestionWriterStyles from './CSSFiles/SecondQuestionWriterStyles.css'

class SecondQuestionWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      childWriterData: 0,
    };
  }

  setChildWriterData(event) {
    console.log("Updating childWriterData")
    const writerData = event.currentTarget.value
    this.props.writerDataUpdate(writerData)
    this.setState({
      childWriterData: 1
      }, () => {console.log(this.state);
    });
  }

  render() {
    return(
      <div className="SecondQuestionBox">
        <h3> Writer Choice </h3>
        <p> Please input the last name of the writer</p>
        <select onChange={this.setChildWriterData.bind(this)}>
          <option> -- Please choose from below -- </option>
          <option value="Aaron">Jason Aaron</option>
          <option value="Adbnett">Dan Abnett</option>
          <option value="Ahmed">Saladin Ahmed</option>
          <option value="Bendis">Brian Michael Bendis</option>
          <option value="Fraction">Ed Brubaker</option>
          <option value="Busiek">Kurt Busiek</option>
          <option value="Cates">Donny Cates</option>
          <option value="Claremont">Chris Claremont</option>
          <option value="Cooke">Darwyn Cooke</option>
          <option value="Duggan">Gerry Duggan</option>
          <option value="Ellis">Warren Ellis</option>
          <option value="Ewing">Al Ewing</option>
          <option value="Fraction">Matt Fraction</option>
          <option value="Gaiman">Neil Gaiman</option>
          <option value="Hickman">Jonathan Hickman</option>
          <option value="Humphries">Sam Humphries</option>
          <option value="Jenkins">Paul Jenkins</option>
          <option value="Johns">Geoff Johns</option>
          <option value="King">Tom King</option>
          <option value="Kirkman">Robert Kirkman</option>
          <option value="Lemire">Jeff Lemire</option>
          <option value="Lobdell">Scott Lobdell</option>
          <option value="Loeb">Jeph Loeb</option>
          <option value="Millar">Mark Millar</option>
          <option value="Miller">Frank Miller</option>
          <option value="Morrison">Grant Morrison</option>
          <option value="Moore">Alan Moore</option>
          <option value="Percy">Benjamin Percy</option>
          <option value="Priest">Christopher Priest</option>
          <option value="Remender">Rick Remender</option>
          <option value="Rucka">Greg Rucka</option>
          <option value="Russell">Mark Russell</option>
          <option value="Snyder">Scott Snyder</option>
          <option value="Soule">Charles Soule</option>
          <option value="Spurrier">Simon Spurrier</option>
          <option value="Starlin">Jim Starlin</option>
          <option value="Taylor">Tom Taylor</option>
          <option value="Tomasi">Peter Tomasi</option>
          <option value="Tynion">James Tynion IV</option>
          <option value="Vaughan">Brian K. Vaughan</option>
          <option value="Venditti">Robert Venditti</option>
          <option value="Waid">Mark Waid</option>
          <option value="Yang">Gene Luen Yang</option>
          <option value="Zdarsky">Chip Zdarsky</option>
          <option value=""></option>
        </select>

        {this.state.childWriterData === 1
          ? <p><button
            onClick={this.props.handleWriterQuestion}
            >
            Submit and Continue
            </button></p>
          : null
        }

      </div>
    )
  }

}

export default SecondQuestionWriter

// <p><input
//   onChange={this.setChildWriterData.bind(this)}
//   type="text"
//   id="writer"
//   placeholder="Eg. King"
//   >
//   </input>
// </p>
