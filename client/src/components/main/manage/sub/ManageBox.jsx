import { useContext,useEffect, useState } from 'react'
import styled from 'styled-components'
import { PlayersContext } from "../../../../store/Context/SunriseContext"


const ManageBox = ({boxTitle, img, option, filteredManages}) => {
  const {playersList} = useContext(PlayersContext);

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


  return (
    <ManageBoxContainer>
      <div className="manageBox-title">
        <span>{boxTitle}</span>
        <img style={{
          backgroundColor:img === 'profit-icon.png' ? '#2DBE85' : '#FC3044'}} 
          src={`./img/${img}`} alt=""
        />
      </div>
      <div className="amount">{parseInt(amounts).toLocaleString()} ₩</div>
      <ul className="category">
        <li>구분</li>
        <li>내역</li>
        <li>금액</li>
      </ul>
      <ul className='category-list'>
        {filteredItem.map((item,id)=>(
          <li key={id}>
            <span>{item.type}</span>
            <span>{item.detail}</span>
            <span style={{color : parseInt(item.amount) > 0 ? 'green' : 'red'}}>{Math.abs(parseInt(item.amount)).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </ManageBoxContainer>
  )
}

export default ManageBox

const ManageBoxContainer = styled.div`
  width: 48%;
  height: 600px;
  min-height: 500px;
  overflow: hidden;
  background-color: #18182C;
  border-radius: 16px;
  color: white;
  @media all and (max-width: 767px) {
    width: calc(100% - 40px);
    }
  img {
    background-color: ${img => img === 'profit-icon.png' ? '#2DBE85' : '#FC3044'};
    border-radius: 20px;
  }
  `