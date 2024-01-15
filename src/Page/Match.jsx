import React from 'react';
import './scss/match.scss';


function Match() {
  return (
    <div id='match'>
      <div className="container">
        <title className="title">
          <h1>MATCH</h1>
        </title>
        <div className="matchBox">
          <div className="container">
            <div className="row1">
              <button><img src="./img/pc-prev-btn.png"  alt="" /></button>
              <div className="dateBox">2024.01</div>
              <button><img src="./img/pc-next-btn.png"  alt="" /></button>
            </div>
            <div className="row2">
              <span>경기일정</span>
              <span>상대팀</span>
              <span>경기결과</span>
            </div>
            <div className="row3">
              <div className="left">
                <div className="matchDate">2024.01.08(일) 14:00</div>
                <div className="matchPlace">대전 월드컵 경기장</div>
              </div>
              <div className="center">
                <div className='homeTeam'>썬라이즈</div>
                <i><img src="./img/pc-logo.png" alt="" /></i>
                <div>1</div>    {/* 더 높은 점수가 노란 글씨 입도록! */}
                <div>VS</div>
                <div>0</div>
                <i><img src="./img/pc-jeonbuk.png" alt="" /></i>
                <div className='awayTeam'>전북</div>
              </div>
              <div className="right">
                <span>승</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match