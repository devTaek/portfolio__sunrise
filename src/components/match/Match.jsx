import React,{useContext, useState} from 'react';
import './match.scss';

import { MatchListContext } from '../../store/Context/SunriseContext';
import Title from '../common/Title';
import MatchFilter from './sub/MatchFilter';
import MatchList from './sub/MatchList';

const Match = () => {
  const {matchList} = useContext(MatchListContext);

  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
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
  const dropDownChangeHandler = (filteredMonth) => {
    setFilteredMonth(filteredMonth)
  }
  
  const filteredMatches = matchList.filter((match)=>{
    const matchDate = new Date(match.date)
    const matchYear = matchDate.getFullYear()
    const matchMonth = matchDate.getMonth() + 1
    return filteredYear === matchYear && filteredMonth === matchMonth;
  })

  return (
    <div id='match'>
      <div className="container">
        <Title title="Match" />
        <div className="matchBox">
          <div className="container">
            <div className="gap">
              <MatchFilter
                filteredMonth={filteredMonth}
                filteredYear={filteredYear}
                onClickPrevMonth={onClickPrevMonth}
                onClickNextMonth={onClickNextMonth}
              />
            
            <div className="row2">
              <span style={{textAlign: `left`}}>경기일정</span>
              <span>스코어</span>
              <span style={{textAlign: `right`}}>경기결과</span>
            </div>
            <MatchList filteredMatches={filteredMatches} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match;