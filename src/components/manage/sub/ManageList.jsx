import { useContext,useEffect,useState } from "react"
import { PlayersContext } from "../../../store/Context/SunriseContext"

const ManageList = ({ filteredManages,selectedOption,setAmounts }) => {
  const {playersList} = useContext(PlayersContext);
  const incomeCondition = item => item.type === '회비'|| item.type ==='지각' || item.type === '결석'
  const expenseCondition = item => item.type === '구장'|| item.type ==='음료' || item.type === '장비'
 
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
  },[filteredManages, selectedOption, playersList])

  // Manage페이지에서는 수입과 지출을 버튼을 통해 나누어서 제작
  // MainManage페이지에서는 수입은 수입, 지출은 지출만 보일수 있게 제작


  // 수익, 지출 조건
  const filteredByOption = (filteredManages, option) => {
    if(option === '수익') {
      return filteredManages.filter(incomeCondition)
    } else if(option === '지출') {
      return filteredManages.filter(expenseCondition)
    } else {
      return filteredManages
    }
  }

  const filteredItem = filteredByOption(filteredManages, selectedOption)
  
  const incomeArray = filteredManages.filter(incomeCondition).map(item => item.amount)
  const expenseArray = filteredManages.filter(expenseCondition).map(item => item.amount)

    // 수입,지출 합산
  const totalIncome = incomeArray.reduce((acc, cur) => acc + parseFloat(cur), 0);
  const totalExpense = expenseArray.reduce((acc, cur) => acc + parseFloat(cur), 0);
  useEffect(() => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      income: totalIncome,
      expense: totalExpense,
    }));
  }, [totalIncome, totalExpense, setAmounts]);

  return (
    <ul className="list">
      {filteredItem.map((item,id)=>{
        return(
        <li key={id}>
        <div className='type'>
          {item.type}
        </div>
        <div className='detail'>
          {item.img ? <img src={`./img/Player/${item.img}`} alt="" /> : ''}
          {item.detail}
        </div>
        <div style={{color:`white`}} className='amount'>
          {item.amount}
        </div>
        <div className='extra_info'>
          {item.extra_info}
        </div>
        </li>
      )})}
    </ul>
  )
}

export default ManageList


  // useEffect(()=>{
  //   // 총액수 구하기
  //   const amountsList = filteredManages.map((item)=>parseInt(item.amount))
  //   setAmounts((prevAmounts)=>({
  //     ...prevAmounts,
  //     income: amountsList
  //   }))
  // },[filteredManages, setAmounts])


  // 수익,지출 계산 함수
  // const calculateIncomeAndExpense = (filteredManages) => {
  //   let incomeTotal = 0;
  //   let expenseTotal = 0;

  //   // 수익, 지출 구분하여 합산
  //   filteredManages.forEach((item)=>{
  //     if(item.type === '회비' || item.type === '지각' || item.type === '결석') {
  //       incomeTotal += parseInt(item.amount)
  //     } else if(item => item.type === '구장'|| item.type === '음료'|| item.type === '장비') {
  //       expenseTotal += parseInt(item.amount)
  //     }
  //   })
  //   setAmounts( {income: incomeTotal, expense: expenseTotal} );

  // 새로운 값을 상태로 업데이트