import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SecondQuestionWriterStyles from './CSSFiles/SecondQuestionWriterStyles.css'
import CardQuestion from './CardQuestion.js'

class SecondQuestionWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      childWriterDataFinished: "",
      childWriterFirstName: "",
      childWriterLastName: ""
    };
    this.childWriterFirstName = this.setChildFirstNameWriterData.bind(this)
    this.childWriterLastName = this.setChildLastNameWriterData.bind(this)
  }

  setChildLastNameWriterData(event) {
    console.log("Updating childWriterLastName")
    const writerLastNameData = event.currentTarget.value
    this.props.writerLastNameDataUpdate(writerLastNameData)
    this.setState({
      childWriterLastName: event.currentTarget.value,
      childWriterDataFinished: 0
      }, () => {console.log(this.state);
    });
  }

  setChildFirstNameWriterData(event) {
    console.log("Updating childWriterFirstName")
    const writerFirstNameData = event.currentTarget.value
    this.props.writerFirstNameDataUpdate(writerFirstNameData)
    this.setState({
      childWriterFirstName: event.currentTarget.value,
      childWriterDataFinished: 1
      }, () => {console.log(this.state);
    });
  }

  render() {
    return(
      <div className="SecondQuestionBox">
        <div>
          <h3> Writer Choice </h3>
          <h5> Please first select the writer's last and first name</h5>
          <select onChange={this.setChildLastNameWriterData.bind(this)}>
            <option> -- Please choose from below -- </option>
            <option value="Aaron" data="Aaron">Aaron</option>
            <option value="Abnett" data="Dan">Abnett</option>
            <option value="Ahmed" data="Saladin">Ahmed</option>
            <option value="Bendis" data="Brian">Bendis</option>
            <option value="Brubaker" data="Ed">Brubaker</option>
            <option value="Busiek" data="Kurt">Busiek</option>
            <option value="Cates" data="Donny">Cates</option>
            <option value="Claremont" data="Chris">Claremont</option>
            <option value="Duggan" data="Gerry">Duggan</option>
            <option value="Ellis" data="Warren">Ellis</option>
            <option value="Ewing" data="Al">Ewing</option>
            <option value="Fraction" data="Matt">Fraction</option>
            <option value="Hickman" data="Jonathan">Hickman</option>
            <option value="Jenkins" data="Paul">Jenkins</option>
            <option value="Lemire" data="Jeff">Lemire</option>
            <option value="Loeb" data="Jeph">Loeb</option>
            <option value="Millar" data="Mark">Millar</option>
            <option value="Miller" data="Frank">Miller</option>
            <option value="Morrison" data="Grant">Morrison</option>
            <option value="Percy" data="Benjamin">Percy</option>
            <option value="Priest" data="Christopher">Priest</option>
            <option value="Remender" data="Rick">Remender</option>
            <option value="Russell" data="Mark">Russell</option>
            <option value="Soule" data="Charles">Soule</option>
            <option value="Spurrier" data="Simon">Spurrier</option>
            <option value="Starlin" data="Jim">Starlin</option>
            <option value="Taylor" data="Tom">Taylor</option>
            <option value="Vaughan" data="Brian">Vaughan</option>
            <option value="Waid" data="Mark">Waid</option>
            <option value="Yang" data="Gene">Yang</option>
            <option value="Zdarsky" data="Chip">Zdarsky</option>
            <option value=""></option>
          </select>

          {this.state.childWriterLastName === 'Aaron'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Jason'>Jason</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Abnett'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Dan'>Dan</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Ahmed'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Saladin'>Saladin</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Bendis'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Brian'>Brian Michael</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Brubaker'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Ed'>Ed</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Busiek'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Kurt'>Kurt</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Cates'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Donny'>Donny</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Claremont'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Chris'>Chris</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Duggan'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Gerry'>Gerry</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Ellis'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Warren'>Warren</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Ewing'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Al'>Al</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Fraction'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Matt'>Matt</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Hickman'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Jonathan'>Jonathan</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Jenkins'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Paul'>Paul</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'King'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Tom'>Tom</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Lemire'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Jeff'>Jeff</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Loeb'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Jeph'>Jeph</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Millar'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Mark'>Mark</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Miller'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Frank'>Frank</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Morrison'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Grant'>Grant</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Percy'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Benjamin'>Benjamin</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Priest'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Christopher'>Christopher</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Remender'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Rick'>Rick</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Russell'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Mark'>Mark</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Soule'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Charles'>Charles</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Spurrier'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Simon'>Simon</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Starlin'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Jim'>Jim</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Taylor'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Tom'>Tom</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Vaughan'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Brian'>Brian</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Waid'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Mark'>Mark</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Yang'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Gene'>Gene Luen</option>
                </select>
              </div>
            : null}
          {this.state.childWriterLastName === 'Zdarsky'
            ? <div>
                <select onChange={this.setChildFirstNameWriterData.bind(this)}>
                  <option> -- Please choose from below -- </option>
                  <option value='Chip'>Chip</option>
                </select>
              </div>
            : null}

          {this.state.childWriterDataFinished === 1
            ? <p><button
              onClick={this.props.fromWriterToFourth}
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

export default SecondQuestionWriter
