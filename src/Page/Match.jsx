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
        <div className="matchBox">
          <div className="container">
            <div className="row1">
              <button onClick={onClickPrevMonth}><img src="./img/pc-prev-btn.png"  alt="" /></button>
              <div className="dateBox">
                {filteredMonth}
              </div>
              <button onClick={onClickNextMonth}><img src="./img/pc-next-btn.png"  alt="" /></button>
            </div>
            <div className="row2">
              <span>경기일정</span>
              <span>스코어</span>
              <span>경기결과</span>
            </div>
              {matchList && matchList.map((item, id)=>(
                <div className="row3" key={item.id}>
                  <div className="left">
                    <div className="matchDate">{item.when}</div>
                    <div className="matchPlace">{item.where}</div>
                  </div>
                  <div className="center">
                    <div className='homeTeam'>{item.home}</div>
                    <i><img src={item.home_logo} alt="" /></i>
                    <div>1</div>    {/* 더 높은 점수가 노란 글씨 입도록! */}
                    <div>VS</div>
                    <div>0</div>
                    <i><img src={item.away_logo} alt="" /></i>
                    <div className='awayTeam'>{item.away}</div>
                  </div>
                  <div className="right">
                    <span>승</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match