import React,{useContext, useState, useRef} from 'react'
import { PlayersContext } from '../../store/Context/SunriseContext'
import './manage.scss'
import Modal from './Modal'

const Manage = () => {

  const options = ['수익', '지출'];
  const {now} = useRef();
  const {dialog} = useRef();
  const {playersList} = useContext(PlayersContext);
  const [filteredMonth, setFilteredMonth] = useState(1);
  const [filteredYear, setFilteredYear] = useState(2024);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const closeSelectedModal= () => {
    setIsModalOpen(false);
  }
  const addExpenseInfo = ()=> {
    setIsModalOpen(true);
  }
  return (
    <>
    {isModalOpen && <Modal
      ref={dialog}
      closeSelectedModal={closeSelectedModal}
    />}
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
                  <div className='money-category'>회비수익</div>
                  <strong className='amount'>100,000₩</strong>
                </div>
                <div className='expense-money'>
                  <div className='money-category'>회비지출</div>
                  <strong className='amount'>62000₩</strong>
                </div>
                <div className='total-amount'>
                  <div className='money-category'>회비잔액</div>
                  <strong className='amount'>560,000₩</strong>
                </div>
              </div>
              
              {/* 수익/지출 카테고리 */}
              <div className="option">
                {options.map((item,id)=>(
                  <li
                    ref={now}
                    key={id} 
                    onClick={
                      ()=>{
                        now.current = item
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
              <button onClick={addExpenseInfo}>수입/지출 입력</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Manage;