import React, { useContext } from 'react'
import styled from 'styled-components'
import { ManageListContext } from '../../../store/Context/SunriseContext'
import ManageList from '../../Manage/sub/ManageList'


const ManageBox = ({boxTitle, img}) => {
  const {manageList} = useContext(ManageListContext)
  console.log(img === 'income-icon.png');
  return (
    <ManageBoxContainer>
      <div className="manageBox_title">
        <span>{boxTitle}</span>
        <img style={{
          backgroundColor:img === 'income-icon.png' ? '#2DBE85' : '#FC3044'}} 
          src={`./img/${img}`} alt=""
        />
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
            <span>{item.type}</span>
            <span>{item.detail}</span>
            <span>{item.amount}</span>
          </li>
        ))}
      </ul>
    </ManageBoxContainer>
  )
}

export default ManageBox

const ManageBoxContainer = styled.div`
  width: 47%;
  height: 100%;
  background-color: #18182C;
  border-radius: 40px;
  color: white;
  margin: 10px;
  img {
    background-color: ${img => img === 'income-icon.png' ? '#2DBE85' : '#FC3044'};
    border-radius: 20px;
  }
  `