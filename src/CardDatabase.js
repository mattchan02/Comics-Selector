import React from 'react'
import ReactDOM from 'react-dom'
import CardDatabaseStyles from './CardDatabaseStyles.css'
import Photo from './ImageFiles/Aquaman New 52.jpg'

function CardDatabase(props) {
  return (
    <table class="RenderCard">
      <tr>
        <td class="left-image">
        <img class="render-image" src={Photo} />
        </td>

        <td>
          <table class="right-info">
            <tr class="right-title">
              <b>Title:</b><br></br> {props.title} <br></br>
            </tr>
            <tr class="right-writer">
              <br></br><b>Writer:</b><br></br> {props.writer} <br></br>
            </tr>
            {props.artist !== "Various"
              ? <tr class="right-artist">
                <br></br><b>Primary Artist:</b><br></br> {props.artist} <br></br>
                </tr>
              : null
            }
            {props.artist == "Various"
              ? <tr class="right-artist-various" title="The artist continually changes throughout the run">
                <br></br><b>Primary Artist:</b><br></br> {props.artist} <br></br>
                </tr>
              : null
            }
            {props.length == "Short"
              ? <tr class="right-length" title="A short run consists of 12 issues or less.">
                <br></br><b>Length:</b><br></br> {props.length} <br></br>
                </tr>
              : null
            }
            {props.length == "Medium"
              ? <tr class="right-length" title="A medium run consists of about 25 to 30 issues.">
                <br></br><b>Length:</b><br></br> {props.length} <br></br>
                </tr>
              : null
            }
            {props.length == "Long"
              ? <tr class="right-length" title="A long run consists of 35 or more issues.">
                <br></br><b>Length:</b><br></br> {props.length} <br></br>
                </tr>
              : null
            }
            <tr class="right-synopsis">
              <br></br><b>Synopsis:</b><br></br> {props.synopsis}
            </tr>


          </table>
        </td>

      </tr>
    </table>
  )
}

export default CardDatabase
