import styled from "styled-components";

const BoardTilteContainer = styled.header`
  h3 {
    font-size: 42px;
    color: #fff;
    font-weight: 700;
    text-align: center;
  }
`
const BoardTilte = ({title}) => {
  return(
    <BoardTilteContainer>
      <div className="container">
        <h3>{title}</h3>
      </div>
    </BoardTilteContainer>
  );
};

export default BoardTilte;