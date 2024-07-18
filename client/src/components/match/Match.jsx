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

  // 월 이동
  const changeMonth = (diff) => {
    let month = filteredMonth + diff;
    let year = filteredYear;
    if(month < 1) {
      month = 12;
      year -= 1;
    } else if (month > 12) {
      month = 1;
      year += 1;
    }

    setFilteredMonth(month);
    setFilteredYear(year);
  }

  
  const filteredMatches = matchList.filter((match)=>{
    const matchDate = new Date(match.date)
    const matchYear = matchDate.getFullYear()
    const matchMonth = matchDate.getMonth() + 1
    return filteredYear === matchYear && filteredMonth === matchMonth;
  })
  console.log(filteredMatches)
  return (
    <div id='match'>
      <div className="container">
      <Title title="Match" backgroundImg='./img/bg-match.png'/>
        <div className="matchBox">
          <div className="container">
            <div className="gap">
              <DateFilter
                filteredMonth={filteredMonth}
                filteredYear={filteredYear}
                changeMonth={changeMonth}
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