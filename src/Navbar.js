import React from "react"
import ReactDOM from "react-dom"
import NavbarStyles from "./NavbarStyles.css"

function Navbar() {
  return (
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#news">About</a>
      <a href="#contact">Contact</a>
      <a href="#about">Random</a>
    </div>
  )
}

export default Navbar
