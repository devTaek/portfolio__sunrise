import React,{useContext, useState} from 'react'
import { PlayersListContext } from '../../store/PlayersListContext'

import './manage.scss'

const Manage = () => {

  const {playersList} = useContext(PlayersListContext);
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
    <div id='manage'>
      <div className="container">
        <title className="title">
          <h1>MANAGE</h1>
        </title>
        <div className="manageBox">
          <div className="container">
            <div className="gap">
              <div className='total-money-box'>
              <div className='gap'>
                <span>총 금액</span>
                <div className="total-money">300,000원</div>
              </div>
              </div>
              <div className="row1">
                <button onClick={onClickPrevMonth}><img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg"  alt="" /></button>
                <div  className="dateBox">2024.{filteredMonth}</div>
                <button onClick={onClickNextMonth}><img src="./img/nextBtn.svg"  alt="" /></button>
              </div>
              <div className="row2">
                <div>팀원</div>
                <div>납부 금액</div>
                <div>납부 날짜</div>
                <div>납부 여부</div>
              </div>
              <ul className="row3">
                    {playersList.map((item, id) => (
                      <li key={item.id}>
                          <div className='player-month-name'>
                            <img src="./img/Player1 2.png" alt="" />
                            <span>{item.name}</span>
                          </div>
                          <div className='player-month-money'>20,000</div>
                          <div className='player-month-date'>24.01.01</div>
                          <div className='player-month-money-check'><span>납부완료</span></div>
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

export default Manage;