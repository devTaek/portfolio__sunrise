import {useContext, useState} from 'react'
import MainSubTitle from '../common/MainSubTitle'
import { MatchListContext } from '../../../store/Context/SunriseContext'
import './mainMatch.scss'

const MainMatch= () => {
  const {matchList} = useContext(MatchListContext);
  const [currentIndex, setCurrentIndex] = useState(0);  // 현재 인덱스상태
  const onNextBtn = () => {
    if(currentIndex < matchList.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1); // 다음 항목으로 이동
    }
  }
  const onPrevBtn = () => {
    if(currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }
  return (
    <div className="main_match">
      <div className="gap">
        <MainSubTitle
          title='MATCH'
          to='/match'
          onNextBtn={onNextBtn}
          onPrevBtn={onPrevBtn}
        />
        <ul style={{
          transform: `translateX(-${currentIndex * (100 / matchList.length)}%)`,
          width: `${matchList.length * 100}%`,
          display: `flex`
          }}>
          {matchList.map((item, id)=>(
            <li key={id} className='main_latest_match' style={{
              width: `100%`
            }}>
              <div className="home_team"><img src={`./img/${item.home_logo}`} alt="" />{item.home}</div>
              <div className='score_box'>{item.home_score} - 1</div>
              <div className="away_team"><img src={`./img/${item.away_logo}`} alt="" />{item.away}</div>
            </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default MainMatch
