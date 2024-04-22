/* import {useState} from 'react'
import styled from 'styled-components'
const MainManageBox = () => {
  const [selectedOption, setSelectedOption] = useState();
  const options = ['수익', '지출'];
  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }
  return (
    <MainManageBoxContainer>
      <div className="option">
        {options.map((item,id)=>(
          <li
            key={id}
            onClick={selectOption}
          >
              {item}
          </li>
        ))}
      </div>
      <div className="income_expense_box">
        <div className="income"></div>
        <div className="expense"></div>
      </div>
    </MainManageBoxContainer>
  )
}

export default MainManageBox

const MainManageBoxContainer = styled.div`
  width: 60%;
  height: 600px; 
  display: flex;
  align-items: center;
  justify-contents: center;
  .option {
    width: 20%;
    display: flex;
    background-color: #18182C;
    border-radius: 40px;
    :hover {
      background-color: rgba(255, 255, 255, 0.08);
      color: #f5f5f5;
      cursor: pointer;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 47px;
      border-radius: 16px;
      color: #8A95A3;
    }
  }
`; */