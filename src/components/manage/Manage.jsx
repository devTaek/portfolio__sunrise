import React,{useState, useRef, useEffect} from 'react'
import './manage.scss'
import Modal from './Modal'
import Title from '../common/Title';
import DateFilter from './sub/DateFilter';
import ManageList from './sub/ManageList'

const Manage = ({manageList, setManageList}) => {
  const {dialog} = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formFields, setFormFields] = useState(
    {
      type: '회비',
      detail: '김지강',
      amount: '',
      extra_info: ''
    }
  )
  const [sum, setSum] = useState({addition:0 , expense: 0});
  const total = sum.addition + sum.expense;
  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const [selectedOption, setSelectedOption] = useState();
  const options = ['수익', '지출'];
  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }
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

  const filteredMatches = manageList.filter((manage) => {
    const manageDate = new Date(manage.date);
    const manageYear = manageDate.getFullYear();
    const manageMonth = manageDate.getMonth() + 1;
    return filteredYear === manageYear && filteredMonth === manageMonth;
  })
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
    // console.log('date:', newData.date);
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
              <DateFilter 
                filteredMonth={filteredMonth}
                filteredYear={filteredYear}
                onClickPrevMonth={onClickPrevMonth}
                onClickNextMonth={onClickNextMonth}
              />
              <div className='total-money-box'> {/* 클래스명 수정필요 */}
                <div className='received-money'>
                  <div className='money-category'>회비수익</div>
                  <strong className='amount'>{sum}</strong>
                </div>
                <div className='expense-money'>
                  <div className='money-category'>회비지출</div>
                  <strong className='amount'>62000₩</strong>
                </div>
                <div className='total-amount'>
                  <div className='money-category'>회비잔액</div>
                  <strong className='amount'>{total}</strong>
                </div>
              </div>
              {/* 수익/지출 카테고리 */}
              <div className="option">
                {options.map((item,id)=>(
                  <li
                    key={id}
                    onClick={selectOption}
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
              <ManageList 
                filteredMatches={filteredMatches}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                sum={sum}
                setSum={setSum}
              />
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