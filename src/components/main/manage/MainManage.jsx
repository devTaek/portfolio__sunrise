import { useState } from 'react';
import MainSubTitle from '../common/MainSubTitle';
import './mainManage.scss';
import styled from 'styled-components'
import ManageBox from './ManageBox';
import ManageAmountBox from './ManageAmountBox';
import MainManageBox from './MainManageBox';

const MainManage = () => {
  let money = {income:20000, expense: 400};

  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
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
    <div className="main_manage">
      <div className="gap">
        <MainSubTitle
          title='MANAGE'
          to='/manage'
          date='2024.4'
          showBtns={true}
          filteredMonth={filteredMonth}
          filteredYear={filteredYear}
          setFilteredMonth={setFilteredMonth}
          setFilteredYear={setFilteredYear}
        />
        <div className="fee_box">
          <ManageBox 
            boxTitle='수익'
            img={'income-icon.png'}
          />
          <ManageBox 
            boxTitle='지출'
            img='expense-icon.png'
          />
        </div>
      </div>
    </div>
  )
}

export default MainManage
