import React,{useContext, useState, useRef} from 'react'
import { PlayersContext } from '../../store/Context/SunriseContext'

import './manage.scss'

const Manage = () => {

  const options = ['수익', '지출'];
  const now = useRef();

  const {playersList} = useContext(PlayersContext);
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
              <div className="selected-month">
                <button onClick={onClickPrevMonth}><img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg"  alt="" /></button>
                <div  className="dateBox">2024.{filteredMonth}</div>
                <button onClick={onClickNextMonth}><img src="./img/nextBtn.svg"  alt="" /></button>
              </div>
              <div className='total-money-box'> {/* 클래스명 수정필요 */}
                <div className='received-money'>
                  <div>회비수익</div>
                  <div>100,000₩</div>
                </div>
                <div className='expense-money'>
                  <span>회비지출</span>
                  <div>62000₩</div>
                </div>
                <div className='bank-balance'>
                  <span>회비잔액</span>
                  <div>560,000₩</div>
                </div>
              </div>
              <div className="option">
                {options.map((item,id)=>(
                  <li 
                    ref={now}
                    key={id} 
                    onClick={
                      ()=>{
                        now.current = item
                        console.log(item)
                      }
                    } 
                  >
                      {item}
                  </li>
                ))}
              </div>
              <div className="category">
                <div>수익경로</div>
                <div>수익상세</div>
                <div>금액</div>
                <div>날짜</div>
              </div>
              <ul className="list">
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
              <button>수입/지출 입력</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage;