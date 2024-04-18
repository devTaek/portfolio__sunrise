import { useState } from 'react';
import MainSubTitle from '../common/MainSubTitle';
import './mainManage.scss';
import styled from 'styled-components'
import ManageBox from './ManageBox';
import ManageAmountBox from './ManageAmountBox';


const MainManage = () => {
  let money = {income:20000, expense: 400};

  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  console.log(filteredMonth)
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
        <div className="manageBox">
          <ManageBox boxTitle='회비납부 현황'/>
          {/* <ManageBox boxTitle='회비 지출'/> */}
          <div className="manageBox_amount">
            <ManageAmountBox boxTitle='회비 수익' money={money.income}/>
              <i>﹢</i>
            <ManageAmountBox boxTitle='회비 지출' money={money.expense}/>
              <i>=</i>
            <ManageAmountBox boxTitle='합계' money={money.income-money.expense}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainManage
