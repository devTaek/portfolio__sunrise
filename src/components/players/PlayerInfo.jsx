import React from 'react'
import './PlayerInfo.scss'

function PlayerInfo({isSelectedContent}) {
  return (
    <div id='playerInfo'>
      <img src={isSelectedContent.img} alt="" />
      <h2>{isSelectedContent.name}</h2>
      <div className="play-style">
        <div className="position">
          <span>POSITION</span>
          <span style={{color: `green`}}>{isSelectedContent.position}</span>
        </div>
      </div>
      <div className="physical">
        <div className="height">
          <span>HEIGHT</span>
          <span style={{fontWeight: `bold`}}>{isSelectedContent.height}</span>
        </div>
        <div className="age">
          <span>AGE</span>
          <span>{isSelectedContent.age}</span>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo