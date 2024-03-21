import React,{useContext, useState} from 'react';
import './match.scss';

import { MatchListContext } from '../../store/Context/SunriseContext';
import Title from '../common/Title';

const Match = () => {
  const {matchList} = useContext(MatchListContext);

  const [filteredMonth, setFilteredMonth] = useState(1);
  const [filteredYear, setFilteredYear] = useState(2024);

  const onClickPrevMonth = () => {
    setFilteredMonth(filteredMonth-1);
    if(filteredMonth <= 1) {
      setFilteredMonth(12);
      setFilteredYear(filteredYear - 1);
    }
  }
  const onClickNextMonth = () => {
    setFilteredMonth(filteredMonth+1);
    if(filteredMonth >= 12) {
      setFilteredMonth(1);
      setFilteredYear(filteredYear + 1);
    }
  }
  return (
    <div id='match'>
      <div className="container">
        <Title title="Match" />
        <div className="matchBox">
          <div className="container">
            <div className="gap">
            <div className="row1">
              <button onClick={onClickPrevMonth}><img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg"  alt="" /></button>
              <div className="dateBox">
              {filteredYear}.{filteredMonth}
              </div>
              <button onClick={onClickNextMonth}><img src="./img/nextBtn.svg"  alt="" /></button>
            </div>
            <div className="row2">
              <span style={{textAlign: `left`}}>경기일정</span>
              <span>스코어</span>
              <span style={{textAlign: `right`}}>경기결과</span>
            </div>
            <ul>
              {matchList && matchList.map((matchList, id)=>(
                  <li className="row3" key={matchList.id}>
                    <div className="left">
                      <div className="matchDate">{matchList.when} {matchList.time}</div>
                      <div className="matchPlace">{matchList.where}</div>
                    </div>
                    <div className="center">
                      <div className="col-gap">
                        <span className='homeTeam'>{matchList.home}</span>
                        <i><img src={matchList.home_logo} alt="" /></i>
                        <span>{matchList.home_score}</span>    {/* 더 높은 점수가 노란 글씨 입도록! */}
                        <span>VS</span>
                        <span>{matchList.away_score}</span>
                        <i><img src={matchList.away_logo} alt="" /></i>
                        <span className='awayTeam'>{matchList.away}</span>
                      </div>
                    </div>
                    <div className="right">{matchList.home_score>matchList.away_score ? '승' : '패'}</div>
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

export default Match;