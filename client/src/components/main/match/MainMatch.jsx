import {useContext, useState} from 'react'
import MainSubTitle from '../common/MainSubTitle'
import { MatchListContext } from '../../../store/Context/SunriseContext'
import './mainMatch.scss'

const MainMatch= () => {
  const {matchList} = useContext(MatchListContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextMonthBtn = () => {
    if(currentIndex < matchList.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1); // 다음 항목으로 이동
    }
  }
  const prevMonthBtn = () => {
    if(currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }

  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  return (
    <div className="main_match">
      <div className="container">
        <MainSubTitle
          title='MATCH'
          to='/match'
          showBtns={true}   // DateFilter컴포넌트 유무.
          filteredMonth={filteredMonth}
          filteredYear={filteredYear}
          setFilteredMonth={setFilteredMonth}
          setFilteredYear={setFilteredYear}
        />
        <div className="gap">
          <button className="prev_btn" onClick={prevMonthBtn}>왼쪽</button>
          <ul style={{
            width: `${matchList.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / matchList.length)}%)`
          }}>
            {matchList.map((item, id) => (
              <li key={id}>
                <div className="home_team"><img src={`./img/${item.home_logo}`} alt="" />{item.home}</div>
                <div className='score_box'>{item.home_score} - {item.away_score}</div>
                <div className="away_team"><img src={`./img/${item.away_logo}`} alt="" />{item.away}</div>
              </li>
            ))}
          </ul>
          <button className="next_btn" onClick={nextMonthBtn}>오른쪽</button>
        </div>
      </div>
    </div>
  )
}

export default MainMatch
