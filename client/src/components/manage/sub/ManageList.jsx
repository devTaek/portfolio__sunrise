import { useEffect, useState } from "react"

const ManageList = ({ dateMatchingList }) => {
  

  const options = ['전체', '수익', '지출'];
  const [selectedOption, setSelectedOption] = useState('전체');

  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }
  
  const [filteredList, setFilteredList] = useState([]);

  const profitCondition = item => item.type === '회비'|| item.type ==='지각' || item.type === '결석';
  const lossCondition = item => item.type === '구장'|| item.type ==='음료' || item.type === '장비' || item.type ==='주차비';

  useEffect(() => {
    let typeFiltered = dateMatchingList;
    if(selectedOption === '수익') {
      typeFiltered = dateMatchingList.filter(profitCondition);
    }else if(selectedOption === '지출') {
      typeFiltered = dateMatchingList.filter(lossCondition)
    }
    setFilteredList(typeFiltered);
  }, [selectedOption, dateMatchingList])


  return (
    <>
      <ul className="category">
        <li>구분</li>
        <li>내역</li>
        <li>금액</li>
        <li>비고</li>
      </ul>

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
            <div style={{color : parseInt(item.amount) > 0 ? 'green' : 'red'}} className='amount'>
              {Math.abs(parseInt(item.amount)).toLocaleString()}
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