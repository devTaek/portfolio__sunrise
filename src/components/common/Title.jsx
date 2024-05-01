import styled from "styled-components";

const TitleContainer = styled.header`
  width: 100%;
  height: 721px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, #0D0F19 0%, rgba(0, 0, 0, 0.08) 100%);
  h1 {
    color: #fff;
      font-family: Pretendard;
      font-size: 40px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
  }
`
const Title = ({title}) => {
  return(
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
  );
};

export default Title;