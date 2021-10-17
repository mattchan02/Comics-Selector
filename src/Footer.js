import React from "react"
import FooterStyles from './CSSFiles/FooterStyles.css'

const thisYear = "2021"

function Footer() {
  return(
    <div className="Footer">
      <p class="FooterP">Copyright {thisYear}</p>
      <p class="FooterP">Matthew Chan's Idea</p>
    </div>
  )
}

export default Footer;
