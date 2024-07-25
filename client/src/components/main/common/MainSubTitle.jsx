import styled from "styled-components"
import { Link } from "react-router-dom";
import DateFilter from '../../common/DateFilter'

const MainSubTitle = ({
  title,
  link,
  buttons,
  filteredMonth,
  setFilteredMonth,
  filteredYear,
  setFilteredYear,
  changeImg
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
        <Link to={link} style={{paddingLeft: `10px`}}>
          <i>+ </i>
          <span> view more</span>
        </Link>
      </div>
      {buttons ? (
        <DateFilter 
          filteredMonth={filteredMonth}
          filteredYear={filteredYear}
          changeMonth={changeMonth}
        />
      ) : 
        <div className='move-btns'>
          <button onClick={() => {changeImg(-1)}}>
            <img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg" alt="" />
          </button>
          <button onClick={() => {changeImg(+1)}}>
            <img src="./img/nextBtn.svg" alt="" />
          </button>
        </div>
      }
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
    @media all and (max-width: 767px) {
      font-size: 7vw;
    }
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
.date-filter, .move-btns {
  display: flex;
  aling-items: center;
  justify-contents: center;
  gap: 20px;
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