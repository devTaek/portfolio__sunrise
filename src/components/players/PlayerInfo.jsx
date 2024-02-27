import React from 'react'
import './PlayerInfo.scss'

function PlayerInfo({selectedPlayer}) {
  return (
    <div id='playerInfo'>
      <img src={selectedPlayer.img} alt="" />
      <h2>{selectedPlayer.name}</h2>
      <div className="play-style">
        <div className="position">
          <span>POSITION</span>
          <span style={{color: `green`}}>{selectedPlayer.position}</span>
        </div>
      </div>
      <div className="physical">
        <div className="height">
          <span>HEIGHT</span>
          <span style={{fontWeight: `bold`}}>{selectedPlayer.height}</span>
        </div>
        <div className="age">
          <span>AGE</span>
          <span>{selectedPlayer.age}</span>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo