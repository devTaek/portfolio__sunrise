import styled from "styled-components"
import { Link } from "react-router-dom";
import DateFilter from '../../common/DateFilter'

const MainSubTitle = ({
  title,
  to,
  showBtns,
  date,
  filteredMonth,
  setFilteredMonth,
  filteredYear,
  setFilteredYear,
  onClickPrevMonth,
  onClickNextMonth
}) => {
  
  return (
    <MainSubTitleBox>
      <div className='main_players_sub_title'>
        <h3>{title}</h3>
        <Link to={to} style={{paddingLeft: `10px`}}>+view more</Link>
      </div>
      {showBtns && (
        <div className='sequence_btn'>
          <DateFilter 
            filteredMonth={filteredMonth}
            filteredYear={filteredYear}
            onClickPrevMonth={onClickPrevMonth}
            onClickNextMonth={onClickNextMonth}
          />
        </div>
      )}
    </MainSubTitleBox>
  )
}

export default MainSubTitle

const MainSubTitleBox = styled.div`
width: 100%;
max-width: 1280px;
margin: 80px auto;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
.main_players_sub_title {
  display: flex;
  justify-contents: space-between;
  h3 {
    font-size: 36px;
    font-weight: 700;
  }
  a {
    font-size: 18px;
    color: gray;
    display: flex;
  }
}
.sequence_btn {
  display: flex;
  aling-items: center;
  justify-contents: center;
  button {
    width: 44px;
    height: 44px;
    background: #18182C;
    border: none;
    border-radius: 50px;
    img {
      width: 16px;
      height: 16px;
    }
  }
  .dateBox {
    display: flex;
    align-items: center;
  }
}
`;