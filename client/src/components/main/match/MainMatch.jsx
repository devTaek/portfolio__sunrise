import MainSubTitle from '../common/MainSubTitle'
import './mainMatch.scss'

const MainMatch= () => {

  return (
      <div className="container">
        <MainSubTitle
          title='MATCH'
          to='/match'
        />
        <div className="content">
          <div className="coming-game">
            <span>
              2024.07.30(일) 19:00 천마풋살파크
            </span>
          </div>
          <div className="matching-box">
            <div className="home-team">
              <img src='./img/pc-logo.png' alt="" />
              <span>썬라이즈FC</span>
            </div>
            <div className="game-schedule" >
              VS
            </div>
            <div className="away-team">
              <img src='./img/pc-jeonbuk.png' alt="" />
              <span>전북현대</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainMatch