import React from 'react'
import { Link } from 'react-router-dom'

import './scss/header.scss';



function Header() {
  return (
    <header id='header'>
      <div className="container">
        <div className="gap">
          <Link to="/"><img src='./img/pc-logo.png' alt="" /></Link>
          <div className="headerMenu">
            <Link to="/players">PLAYERS</Link>
            <Link to="/match">MATCH</Link>
            <Link to="/manage">MANAGE</Link>
            <Link to="/community">COMMUNITY</Link>
          </div>
          <div className='mobile-bar'>'
            <a class="glyphicon glyphicon-menu-hamburger"></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header