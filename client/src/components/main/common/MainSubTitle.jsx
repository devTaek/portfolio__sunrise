import styled from "styled-components"
import { Link } from "react-router-dom";
import DateFilter from '../../common/DateFilter'

const MainSubTitle = ({
  title,
  to,
  showBtns,
  filteredMonth,
  setFilteredMonth,
  filteredYear,
  setFilteredYear,
}) => {
  
  // 월 이동
  const changeMonth = (diff) => {
    let month = filteredMonth + diff;
    let year = filteredYear;
    if(month < 1) {
      month = 12;
      year -= 1;
    } else if (month > 12) {
      month = 1;
      year += 1;
    }

    setFilteredMonth(month);
    setFilteredYear(year);
  }

  return (
    <MainSubTitleBox>
      <div className='main-sub-title'>
        <h3>{title}</h3>
        <Link to={to} style={{paddingLeft: `10px`}}>
          <i>+ </i>
          <span> view more</span>
        </Link>
      </div>
      {showBtns && (
        <div className='sequence_btn'>
          <DateFilter 
            filteredMonth={filteredMonth}
            filteredYear={filteredYear}
            changeMonth={changeMonth}
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
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
.main-sub-title {
  display: flex;
  justify-contents: space-between;
  h3 {
    font-size: 3rem;
    font-weight: 700;
  }
  a {
    font-size: 1em;
    color: gray;
    display: flex;
    span {
      @media all and (max-width: 767px) {
        display: none;
      }
    }
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