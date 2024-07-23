import styled from "styled-components";

const Title = ({title, backgroundImg}) => {
  return(
      <TitleContainer backgroundImg={backgroundImg}>
        <div className="gap">
          <h1>{title}</h1>
        </div>
      </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({backgroundImg}) => `url(${backgroundImg}) no-repeat center/cover fixed`};
  .gap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, #0D0F19 0%, rgba(0, 0, 0, 0.08) 100%);
    h1 {
        color: #fff;
        font-family: Pretendard;
        font-size: 4.5vw;
        font-weight: 700;
        @media all and (max-width: 767px) {
          font-size: 5vw;
        }
      } 
  }
  
`