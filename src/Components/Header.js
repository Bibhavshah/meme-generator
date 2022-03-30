import React from 'react'
import face from "../images/Troll Face.png"
import "../styles.css"

export default function Header() {
  return (
    <div className="header">
        <img src={face} alt="troll-face" className="header-face" />
        <h2 className="header-title">Meme Generator</h2>
        <p className="header-description">React Course Project - 3</p>
    </div>
  )
}
