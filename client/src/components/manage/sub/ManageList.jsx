import { useEffect, useState } from "react"

const ManageList = ({ dateMatchingList }) => {
  
  // 전체, 수익, 지출 조건부
  const options = ['전체', '수익', '지출'];
  const [selectedOption, setSelectedOption] = useState('전체');

  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }
  
  // 수익, 지출 리스트 조건부 필터링
  const [filteredList, setFilteredList] = useState(dateMatchingList);
  useEffect(() => {
    const incomeCondition = item => item.type === '회비'|| item.type ==='지각' || item.type === '결석'
    const expenseCondition = item => item.type === '구장'|| item.type ==='음료' || item.type === '장비'

    let filtered = dateMatchingList;
    
    if(selectedOption === '수익') {
      filtered = dateMatchingList.filter(incomeCondition);
    }else if(selectedOption === '지출') {
      filtered = dateMatchingList.filter(expenseCondition)
    }
    setFilteredList(filtered);
  }, [options, dateMatchingList])


  return (
    <>
      <ul className="category">
        <li>구분</li>
        <li>내역</li>
        <li>금액</li>
        <li>비고</li>
      </ul>

      {/* 수익/지출 카테고리 */}
      <div className="option">
        {options.map((item,id)=>(
          <li key={id} onClick={selectOption}>{item}</li>
        ))}
      </div>

      <ul className="list">
        {filteredList.map((item,id)=>{
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
    </>
    
  )
}

export default ManageList