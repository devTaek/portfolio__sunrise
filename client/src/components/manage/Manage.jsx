import React,{useState, useEffect, useRef, useMemo} from 'react'
import './manage.scss'
import Modal from './sub/Modal'
import Title from '../common/Title';
import DateFilter from '../common/DateFilter';
import ManageList from './sub/ManageList'

import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { manageState, playersState } from '../../store/recoil/atoms/state';

const Manage = () => {
  const playersList = useRecoilValue(playersState);
  const manageList = useRecoilValue(manageState);

  const {dialog} = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [list, setList] = useState([]);
  const [amounts, setAmounts]= useState({})
  const [dateMatchingList, setDateMatchingList] = useState([]);
  const [prevMonthAmounts, setPrevMonthAmounts] = useState(0);
  const [monthlyAmounts, setMonthlyAmounts] = useState({profit: 0,loss: 0});
  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  
  const totalAmounts = useMemo (() => {
    return prevMonthAmounts + monthlyAmounts.profit +monthlyAmounts.loss; 
  }, [prevMonthAmounts, monthlyAmounts])

  useEffect(() => {
    setList(manageList);
  },[manageList]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/manages/amounts`)
      .then(response => {
        let data = response.data;
        setAmounts(data);

        let prevMonthData = 702260;
        for(let i=1; i < filteredMonth; i++) {
          if (filteredYear === new Date().getFullYear() && i < new Date().getMonth() + 1) {
            if (data[i + '월']) {
                prevMonthData += data[i + '월'];
            }
          }
        }
        
        setPrevMonthAmounts(prevMonthData);
      })
      .catch(error => {
        console.error('Error fetching monthly amounts:', error);
      });
    
  }, [filteredMonth, filteredYear]);

  const changeMonth =(diff) => {
    let month = filteredMonth + diff;
    let year = filteredYear;
    if(month < 1) {
      month = 12;
      year -= 1;
    } else if (month > 12) {
      month = 1;
      year += 1;
    }

    setFilteredMonth(month);
    setFilteredYear(year);
  }

  useEffect(() => {
    const dateMatching = list.filter((manage) => {
      const manageDate = new Date(manage.date);
      const manageYear = manageDate.getFullYear();
      const manageMonth = manageDate.getMonth() + 1;
      return filteredYear === manageYear && filteredMonth === manageMonth;
    });
    setDateMatchingList(dateMatching);
  }, [list, filteredYear, filteredMonth]);

  useEffect(() => {
    const profitCondition = item => item.type === '회비'|| item.type ==='지각' || item.type === '결석';
    const lossCondition = item => item.type === '구장'|| item.type ==='음료' || item.type === '장비' || item.type ==='주차비';

    const dataReduce = (acc, cur) => acc + parseFloat(cur.amount);
    const profitAmounts = dateMatchingList.filter(profitCondition).reduce(dataReduce, 0);
    const lossAmounts = dateMatchingList.filter(lossCondition).reduce(dataReduce, 0);

    setMonthlyAmounts({profit: profitAmounts, loss: lossAmounts});
  }, [dateMatchingList]);

  const onCloseModal= () => {
    setIsModalOpen(false);
  }

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
    <Title title="Manage" backgroundImg='./img/bg-manage.png'/>
        <main className="manageBox">
          <div className="container">
            <div className="gap">

              <DateFilter 
                filteredMonth={filteredMonth}
                filteredYear={filteredYear}
                changeMonth={changeMonth}
              />

              <div className='total-money-box'>
                <div className='received-money'>
                  <div className='money-category'>회비수익</div>
                  <strong className='amount'>{monthlyAmounts.profit.toLocaleString()}</strong>
                </div>
                <div className='expense-money'>
                  <div className='money-category'>회비지출</div>
                  <strong className='amount'>{monthlyAmounts.loss.toLocaleString()}</strong>
                </div>
                <div className='total-amount'>
                  <div className='money-category'>회비잔액</div>
                  <strong className='amount'>{totalAmounts.toLocaleString()}</strong>
                </div>
              </div>

              <ManageList dateMatchingList={dateMatchingList} />

              <button onClick={addExpenseInfo}>수입/지출 입력</button>
            </div>
          </div>
        </main>
    </div>
    </>
  )
}

export default Manage;