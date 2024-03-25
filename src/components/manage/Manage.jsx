import React,{useEffect, useState, useRef} from 'react'
import './manage.scss'
import Modal from './Modal'
import Title from '../common/Title';

const Manage = () => {

  const options = ['수익', '지출'];
  const {now} = useRef();
  const {dialog} = useRef();
  const [filteredMonth, setFilteredMonth] = useState(1);
  const [filteredYear, setFilteredYear] = useState(2024);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [manageData, setManageData] = useState([]);
  const [formFields, setFormFields] = useState(
    {
      type: '',
      detail: '',
      amount: '',
      extra_info: ''
    }
  )
  // const [sequance, setSequance] = useState(null)

  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/manageList');
        if (!response.ok) {
          throw new Error('Failed to fetch data from server');
        }
        const data = await response.json();
        setManageData(data); // 서버에서 받은 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    // fetchData 함수 호출하여 데이터 가져오기
    fetchData();
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행
  



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
      date: new Date()  // 현재 날짜 추가
    };
    setManageData(prevData => [...prevData, newData]);
    console.log('Submitted Data:', formFields);
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
                    ref={now}
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
                <li>상세</li>
                <li>금액</li>
                <li>비고</li>
              </ul>
              <ul className="list">
                {manageData.map((item,id)=>(
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