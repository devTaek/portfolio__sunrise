import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id='header'>      
      <div className="gap">
        <Link to='/players'>players</Link>
        <Link to='/match'>match</Link>
        <Link to='/manage'>manage</Link>
        <Link to='/community'>community</Link>
      </div>
    </header>
  )
}

export default Header
