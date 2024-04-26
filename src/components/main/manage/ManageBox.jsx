import { useContext,useEffect, useState } from 'react'
import styled from 'styled-components'
import { PlayersContext } from "../../../store/Context/SunriseContext"
import { ManageListContext } from '../../../store/Context/SunriseContext'


const ManageBox = ({boxTitle, img, option, filteredManages}) => {
  const {playersList} = useContext(PlayersContext);
  const {manageList} = useContext(ManageListContext);

  const [amounts, setAmounts] = useState(0);

  const incomeCondition = item => item.type === '회비'|| item.type ==='지각' || item.type === '결석'
  const expenseCondition = item => item.type === '구장'|| item.type ==='음료' || item.type === '장비'
  const filteredByOption = (filteredManages, option) => {
    if(option === '수익') {
      return filteredManages.filter(incomeCondition);
    } else if(option === '지출') {
      return filteredManages.filter(expenseCondition);
    } else {
      return filteredManages;
    }
  }

  const filteredItem = filteredByOption(filteredManages, option)

  const amountsArray = filteredItem.map((item => item.amount))
  const totalAmount = amountsArray.reduce((acc, cur) => acc + parseFloat(cur), 0);
  console.log(totalAmount)
  useEffect(()=>{
    setAmounts(totalAmount)
  },[totalAmount])

/*   const filteredByOption = (filteredManages, option) => {
    if(option === '수익') {
      return filteredManages.filter(incomeCondition)
    } else if(option === '지출') {
      return filteredManages.filter(expenseCondition)
    } else {
      return filteredManages
    }
  } */

  useEffect(()=> {
    const callImg = () => {
      filteredManages.forEach((item) => {
        playersList.forEach((player) => {
          if(item.detail === player.name) {
            item.img = player.img
          }
        })
      })
    }
    callImg();
  },[filteredManages, playersList])

  console.log(filteredItem);

  return (
    <ManageBoxContainer>
      <div className="manageBox_title">
        <span>{boxTitle}</span>
        <img style={{
          backgroundColor:img === 'income-icon.png' ? '#2DBE85' : '#FC3044'}} 
          src={`./img/${img}`} alt=""
        />
      </div>
      <div className="amount">{amounts}</div>
      <ul className="category">
        <li>구분</li>
        <li>내역</li>
        <li>금액</li>
      </ul>
      <ul className='category_list'>
        {filteredItem.map((item,id)=>(
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
  min-height: 500px;
  background-color: #18182C;
  border-radius: 40px;
  color: white;
  margin: 10px;
  img {
    background-color: ${img => img === 'income-icon.png' ? '#2DBE85' : '#FC3044'};
    border-radius: 20px;
  }
  `