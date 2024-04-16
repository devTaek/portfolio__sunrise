import React, { useContext } from 'react'
import styled from 'styled-components'
import { ManageListContext } from '../../../store/Context/SunriseContext'
import ManageList from '../../Manage/sub/ManageList'


const ManageBox = ({boxTitle}) => {
  const {manageList} = useContext(ManageListContext)
  return (
    <ManageBoxContainer>
      <div className="manageBox_title">
        <span>{boxTitle}</span>
        <img src="./img/income-icon.png" alt=""/>
      </div>
      <div className="amount">100,000₩</div>
      <ul className="category">
        <li>구분</li>
        <li>내역</li>
        <li>금액</li>
      </ul>
      <ul className='category_list'>
        {manageList.map((item,id)=>(
          <li key={id}>
            <div>{item.type}</div>
            <div>{item.detail}</div>
            <div>{item.amount}</div>
          </li>
        ))}
      </ul>
    </ManageBoxContainer>
  )
}

export default ManageBox

const ManageBoxContainer = styled.div`
  width: 620px;
  height: 508px;
  margin: 0 10px;
  background-color: #18182C;
  border-radius: 40px;
  color: white;
  `