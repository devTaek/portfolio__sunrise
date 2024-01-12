import React,{useContext} from 'react';
import './scss/match.scss';

import {MatchListContext, matchList} from '../store/PlayersListContext';

function Match() {
  const {matchList} = useContext(MatchListContext);

  return (
    <div id='match'>
      <div className="container">
        <div className="title">
          <h1>MATCH</h1>
        </div>
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
            <ul className="row3">
              {matchList.map((item, id)=> (
                <li key={item.id}>
                  <div className="left">
                    <div className="matchDate">{item.when}</div>
                    <div className="matchPlace">{item.where}</div>
                  </div>
                  <div className="center">
                    <span>썬라이즈</span>
                    <i><img src="./img/pc-logo.png" alt="" /></i>
                    <span>1</span>
                    <span>VS</span>
                    <span>0</span>
                    <i><img src="./img/pc-jeonbuk.png" alt="" /></i>
                    <span></span>
                  </div>
                  <div className="right">
                    <span>승</span>
                  </div>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match