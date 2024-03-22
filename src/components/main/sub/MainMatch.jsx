import React from 'react'
import MainSubTitle from '../common/MainSubTitle'
import './mainMatch.scss'

const MainMatch= () => {
  return (
    <div className="main_match">
      <div className="gap">
        <MainSubTitle
          title='MATCH'
          to='/match'
        />
        <div className='main_latest_match'>
          <div className="home_team"><img src="./img/pc-logo.png" alt="" />SUNRISE</div>
          <div className='score_box'>3 - 1</div>
          <div className="away_team"><img src="./img/pc-logo.png" alt="" />FC 서울</div>
        </div>
      </div>
    </div>
  )
}

export default MainMatch
