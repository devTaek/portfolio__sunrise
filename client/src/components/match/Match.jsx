import React,{useContext, useState} from 'react';
import './match.scss';

import { MatchListContext } from '../../store/Context/SunriseContext';
import Title from '../common/Title';
import DateFilter from '../common/DateFilter';
import MatchList from './sub/MatchList';

const Match = () => {
  const {matchList} = useContext(MatchListContext);

  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const prevMonthBtn = () => {
    setFilteredMonth(filteredMonth-1);
    if(filteredMonth <= 1) {
      setFilteredMonth(12);
      setFilteredYear(filteredYear - 1);
    }
  }
  const nextMonthBtn = () => {
    setFilteredMonth(filteredMonth+1);
    if(filteredMonth >= 12) {
      setFilteredMonth(1);
      setFilteredYear(filteredYear + 1);
    }
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
              <DateFilter
                filteredMonth={filteredMonth}
                filteredYear={filteredYear}
                prevMonthBtn={prevMonthBtn}
                nextMonthBtn={nextMonthBtn}
              />
            
            <div className="row2">
              <span style={{textAlign: `left`}}>경기일정</span>
              <span>스코어</span>
              <span style={{textAlign: `right`}}>경기결과</span>
            </div>
            {/* state값과 동일 이름 */}
            <MatchList filteredMatches={filteredMatches} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match;