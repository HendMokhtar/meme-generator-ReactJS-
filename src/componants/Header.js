import React from 'react'

export default function Header() {
    return(
        <header className = "header">
          <div className="leftSide">
          <img src={require('../images/Troll Face.png')} alt="Header Vector"/>
          <h2>Meme Generator</h2>
          </div>
          <div className="rightSide">
          <h2>React Course - Project 3</h2>
          </div>
        </header>
    )
}