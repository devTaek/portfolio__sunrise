import React from 'react'
import { Link } from 'react-router-dom'

const Main= () => {
  return (
    <div id="main">
      <div className='main-players'>players</div>
      <div className='main-match'>match</div>
      <div className='main-manage'>manage</div>
      <div className='main-community'>community</div>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Main
