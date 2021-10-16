import React from "react"
import ReactDOM from 'react-dom'
import NavbarStyles from './CSSFiles/NavbarStyles.css'

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
