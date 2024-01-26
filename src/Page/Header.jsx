import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar';

import './scss/header.scss';



function Header() {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSide = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header id='header'>
      <div className="container">
        <div className="gap">
          <Link to="/"><img src='./img/pc-logo.png' alt="" /></Link>
          <div className="header__menu">
            <Link to="/players">PLAYERS</Link>
            <Link to="/match">MATCH</Link>
            <Link to="/manage">MANAGE</Link>
            <Link to="/community">COMMUNITY</Link>
          </div>
          <button onClick={toggleSide} className="menuBtn"><i className='material-icons'>&#xe5d2;</i></button>
          {isOpen ? (
            <ul>
              <li>PLAYERS</li>
              <li>MATCH</li>
              <li>MANAGE</li>
              <li>COMMUNITY</li>
            </ul>
          ):''}
        </div>
      </div>
    </header>
  )
}

export default Header