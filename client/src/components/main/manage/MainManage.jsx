import { useContext, useState } from 'react';
import './mainManage.scss';

import MainSubTitle from '../common/MainSubTitle';
import ManageBox from './ManageBox';

import { ManageListContext } from '../../../store/Context/SunriseContext';

const MainManage = () => {
  const {manageList} = useContext(ManageListContext);

  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  

  // manageList를 filter를 통해 새로운 날짜를 만들어 
  // 현재 filtereMonth or filtereYear의 상태값과 비교해
  // 같은 값을 가진 것을 새로운 배열로 나타내주는 함수.
  const filteredManages = manageList.filter((manage) => {
    const manageDate = new Date(manage.date);
    const manageYear = manageDate.getFullYear();
    const manageMonth = manageDate.getMonth() + 1;
    return filteredYear === manageYear && filteredMonth === manageMonth;
    
  })
  
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
      <div className="container">
        <MainSubTitle
          title='MANAGE'
          to='/manage'
          showBtns={true}
          filteredMonth={filteredMonth}
          filteredYear={filteredYear}
          setFilteredMonth={setFilteredMonth}
          setFilteredYear={setFilteredYear}
          onClickPrevMonth={onClickPrevMonth}
          onClickNextMonth={onClickNextMonth}
        />
        <div className="fee-box">
          <ManageBox 
            boxTitle='수익'
            img={'profit-icon.png'}
            filteredManages={filteredManages}
            option= '수익'
          />
          <ManageBox 
            boxTitle='지출'
            img='loss-icon.png'
            filteredManages={filteredManages}
            option= '지출'
          />
        </div>
      </div>
  )
}

export default MainManage