import React,{useContext, useState} from 'react';
import './scss/match.scss';
import { MatchListContext } from '../store/PlayersListContext';


function Match(props) {
  const {matchList} = useContext(MatchListContext);

  const [filteredMonth, setFilteredMonth] = useState(1);


  const onClickPrevMonth = () => {
    setFilteredMonth(filteredMonth-1);
    if(filteredMonth <= 1) {
      setFilteredMonth(12);
    }
  }
  const onClickNextMonth = () => {
    setFilteredMonth(filteredMonth+1);
    if(filteredMonth >= 12) {
      setFilteredMonth(1);
    }
  }

  return (
    <div id='match'>
      <div className="container">
        <title className="title">
          <h1>MATCH</h1>
        </title>
        <div className="bgGradient">
          
        </div>
        <div className="matchBox">
          <div className="container">
            <div className="gap">
            <div className="row1">
              <button onClick={onClickPrevMonth}><img src="./img/pc-prev-btn.png"  alt="" /></button>
              <div className="dateBox">
                2024.{filteredMonth}
              </div>
              <button onClick={onClickNextMonth}><img src="./img/pc-next-btn.png"  alt="" /></button>
            </div>
            <div className="row2">
              <span>경기일정</span>
              <span>스코어</span>
              <span>경기결과</span>
            </div>
            <ul>
              {matchList && matchList.map((item, id)=>(
                  <li className="row3" key={item.id}>
                    <div className="left">
                      <div className="matchDate">{item.when} {item.time}</div>
                      <div className="matchPlace">{item.where}</div>
                    </div>
                    <div className="center">
                      <div className="col-gap">
                        <span className='homeTeam'>{item.home}</span>
                        <i><img src={item.home_logo} alt="" /></i>
                        <span>1</span>    {/* 더 높은 점수가 노란 글씨 입도록! */}
                        <span style={{fontSize: `32px`}}>VS</span>
                        <span>0</span>
                        <i><img src={item.away_logo} alt="" /></i>
                        <span className='awayTeam'>{item.away}</span>
                      </div>
                    </div>
                    <div className="right">승</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match