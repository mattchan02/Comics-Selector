import React from "react"
<<<<<<< Updated upstream
import ReactDOM from "react-dom"
import NavbarStyles from "./NavbarStyles.css"
=======
import ReactDOM from 'react-dom'
import NavbarStyles from './CSSFiles/NavbarStyles.css'
>>>>>>> Stashed changes

function Navbar() {

  const refreshPage = () =>  {
    window.location.reload();
  };

  return (
    <div class="topnav">
      <a onClick={refreshPage}>Refresh</a>
    </div>
  )
}

export default Navbar
