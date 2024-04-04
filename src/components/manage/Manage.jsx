import React,{useEffect, useState, useRef, useContext} from 'react'
import './manage.scss'
import Modal from './Modal'
import Title from '../common/Title';
import { PlayersContext } from '../../store/Context/SunriseContext';

const Manage = ({manageList, setManageList}) => {
  const {playersList} = useContext(PlayersContext);
  const {dialog} = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formFields, setFormFields] = useState(
    {
      type: '',
      detail: '',
      amount: '',
      extra_info: ''
    }
  )

  const [filteredMonth, setFilteredMonth] = useState(1);
  const [filteredYear, setFilteredYear] = useState(2024);

  const options = ['수익', '지출'];

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

  const onCloseModal= () => {
    setIsModalOpen(false);
  }
  const addExpenseInfo = ()=> {
    setIsModalOpen(true);
  }
  const onSubmit = (e, formFields) => {
    e.preventDefault();
    const newData = {
      type: formFields.type,
      detail: formFields.detail,
      amount: formFields.amount,
      extra_info: formFields.extra_info,
      date: new Date(),  // 현재 날짜 추가
    };
    setManageList(prevData => [...prevData, newData]);
    console.log('Submitted Data:', formFields);
    console.log('date:', newData.date);
    onCloseModal();
  }
  return (
    <>

    {isModalOpen && <Modal
      ref={dialog}
      onCloseModal={onCloseModal}
      onSubmit={onSubmit}
      formFields={formFields}
      setFormFields={setFormFields}
    />}

    <div id='manage'>
      <div className="container">
        <Title title='Manage'/>
        <main className="manageBox">
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
                    key={id} 
                    // 수익/지출 데이터 입력후 생성
                    // onClick={
                    //   ()=>{
                    //     now.current = item
                    //   }
                    // }
                  >
                      {item}
                  </li>
                ))}
              </div>
              <ul className="category">
                <li>구분</li>
                <li>내역</li>
                <li>금액</li>
                <li>비고</li>
              </ul>
              <ul className="list">
                {manageList.map((item,id)=>(
                  <li key={id}>
                  <div className='type'>
                    {item.type}
                  </div>
                  <div className='detail'>
                    {item.detail}
                  </div>
                  <div style={{color:`white`}} className='amount'>
                    {item.amount}
                  </div>
                  <div className='extra_info'>
                    {item.extra_info}
                  </div>
                  </li>
                ))
              }
              </ul>
              <button onClick={addExpenseInfo}>수입/지출 입력</button>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default Manage;