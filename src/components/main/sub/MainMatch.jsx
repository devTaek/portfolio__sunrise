import {useContext} from 'react'
import MainSubTitle from '../common/MainSubTitle'
import { MatchListContext } from '../../../store/Context/SunriseContext'
import './mainMatch.scss'

const MainMatch= () => {
  const {matchList} = useContext(MatchListContext);
  const onNextBtn = () => {

  }
  return (
    <div className="main_match">
      <div className="gap">
        <MainSubTitle
          title='MATCH'
          to='/match'
          // onNextBtn={}
          // onPrevBtn={}
        />
        <ul>
          {matchList.map((item, id)=>(
            <li key={id} className='main_latest_match'>
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
