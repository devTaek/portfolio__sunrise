import { useState } from 'react';
import MainSubTitle from '../common/MainSubTitle';
import './mainManage.scss';
import styled from 'styled-components'
import ManageBox from './ManageBox';


const MainManage = () => {


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
        />
        <div className="manageBox">
          <ManageBox boxTitle='회비 수익'/>
          <ManageBox boxTitle='회비 지출'/>
        </div>
      </div>
    </div>
  )
}

export default MainManage
