import React,{useState, useEffect, useRef, useContext} from 'react'
import './manage.scss'
import Modal from './sub/Modal'
import Title from '../common/Title';
import DateFilter from '../common/DateFilter';
import ManageList from './sub/ManageList'

import { ManageListContext,PlayersContext } from '../../store/Context/SunriseContext';
import axios from 'axios';

const Manage = () => {
  const {manageList} = useContext(ManageListContext);
  const {playersList} = useContext(PlayersContext);
  const {dialog} = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [list, setList] = useState([]);
  
  const [monthlyAmounts, setMonthlyAmounts] = useState({
    profit: 0,
    loss: 0
  });
  const [amounts, setAmounts]= useState({})



  // manageList -> list
  useEffect(() => {
    setList(manageList);
  },[manageList]);

   // 액수 총합(서버GET)
  useEffect(() => {
    axios.get('http://localhost:3001/api/manages/amounts')
      .then(response => {
        setAmounts(response.data);
      })
      .catch(error => {
        console.error('Error fetching monthly amounts:', error)
      })
  },[])

  /* 함수 재사용 예정 */
  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  
  const prevMonthBtn = () => {
    setFilteredMonth(filteredMonth-1);
    if(filteredMonth <= 1) {
      setFilteredMonth(12);
      setFilteredYear(filteredYear - 1);
    }
  }
  const nextMonthBtn = () => {
    setFilteredMonth(filteredMonth+1);
    if(filteredMonth >= 12) {
      setFilteredMonth(1);
      setFilteredYear(filteredYear + 1);
    }
  }


  /* list와 현재의 월별 비교 */
  /* match와 같은 함수(중복) */
  const dateMatchingList = list.filter((manage) => {
    const manageDate = new Date(manage.date);
    const manageYear = manageDate.getFullYear();
    const manageMonth = manageDate.getMonth() + 1;
    return filteredYear === manageYear && filteredMonth === manageMonth;
  })

  /* 모달창 닫기 */
  const onCloseModal= () => {
    setIsModalOpen(false);
  }

  /* 모달창 띄우기*/
  const addExpenseInfo = ()=> {
    setIsModalOpen(true);
  }

  return (
    <>
    {isModalOpen && <Modal
      ref={dialog}
      onCloseModal={onCloseModal}
      playersList={playersList}
      setList={setList}
    />}

    <div id='manage'>
        <Title title='Manage'/>
        <main className="manageBox">
          <div className="container">
            <div className="gap">

              <DateFilter 
                filteredMonth={filteredMonth}
                filteredYear={filteredYear}
                prevMonthBtn={prevMonthBtn}
                nextMonthBtn={nextMonthBtn}
              />

              <div className='total-money-box'> {/* 클래스명 수정필요 */}
                <div className='received-money'>
                  <div className='money-category'>회비수익</div>
                  {/* 서버에서 결과값 가져오자 */}
                  <strong className='amount'>{monthlyAmounts.profit}</strong>
                </div>
                <div className='expense-money'>
                  <div className='money-category'>회비지출</div>
                  <strong className='amount'>{monthlyAmounts.loss}</strong>
                </div>
                <div className='total-amount'>
                  <div className='money-category'>회비잔액</div>
                  <strong className='amount'>총액</strong>
                </div>
              </div>

              {/* 리스트 목록 */}
              <ManageList dateMatchingList={dateMatchingList} setMonthlyAmounts={setMonthlyAmounts}/>

              {/* 모달창 열고닫기만 하는기능. */}
              <button onClick={addExpenseInfo}>수입/지출 입력</button>
            </div>
          </div>
        </main>
    </div>
    </>
  )
}

export default Manage;


/** 렌더링 횟수 구하기
const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(prevCount => prevCount + 1);
    console.log(`Manage component rendered ${renderCount + 1} times`);
  },[]);
 */


  /** income, expense    
    useEffect(() => {
    const monthlyAmounts = dateMatchingList.reduce((acc, cur) => {
      const amount = parseFloat(cur.amount) || 0;
      if (cur.type === '회비' || cur.type === '지각' || cur.type === '결석') {
        acc.income += amount;
      } else if (cur.type === '구장' || cur.type === '음료' || cur.type === '장비') {
        acc.expense += amount;
      }
      return acc;
    }, { income: 0, expense: 0 });

    setAmounts(monthlyAmounts);
  }, [dateMatchingList])
 */
