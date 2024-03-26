import styled from "styled-components"
import { Link } from "react-router-dom";

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
  width: 200px;
  text-align: right;
  button {
    width: 44px;
    height: 44px;
    background: #18182C;
    border: none;
    border-radius: 50px;
    margin-left: 16px;
    img {
      width: 16px;
      height: 16px;
    }
  }
}
`;
const MainSubTitle = ({title,to,date,onPrevBtn,onNextBtn}) => {
  return (
    <MainSubTitleBox>
      <div className='main_players_sub_title'>
        <h3>{title}</h3>
        <Link to={to} style={{paddingLeft: `10px`}}>+view more</Link>
      </div>
      <div className='sequence_btn'>
        <button onClick={onPrevBtn}><img style={{transform: `rotate(180deg)`}}src="./img/nextBtn.svg" alt="" /></button>
        {date}
        <button onClick={onNextBtn}><img src="./img/nextBtn.svg" alt="" /></button>
      </div>
    </MainSubTitleBox>
  )
}

export default MainSubTitle
