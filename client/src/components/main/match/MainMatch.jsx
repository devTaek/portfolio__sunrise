import { useRecoilValue } from 'recoil';
import { matchState } from '../../../store/recoil/atoms/state'
import MainSubTitle from '../common/MainSubTitle'
import './mainMatch.scss'

const MainMatch= () => {
  const matchList = useRecoilValue(matchState);

  return (
      <div className="container">
        <MainSubTitle
          title='MATCH'
          link='/match'
        />
        {matchList.map((match) => (
          <div className="content">
            <div className="coming-game">
              <span>
                {match.game_date} {match.game_time} {match.place}
              </span>
            </div>
            <div className="matching-box">
              <div className="home-team">
                <img src='./img/pc-logo.png' alt="" />
                <span>{match.home}</span>
              </div>
              <div className="game-schedule" >
                VS
              </div>
              <div className="away-team">
                <img src='./img/pc-jeonbuk.png' alt="" />
                <span>{match.away}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default MainMatch