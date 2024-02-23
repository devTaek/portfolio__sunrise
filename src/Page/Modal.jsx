import Chart from './Chart';
import styled from "styled-components";

const SelectedComponent = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 80%;
margin: 0 auto;
background: gray;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
`;

const Button = styled.button`
position: absolute;
top: 10px;
right: 10px;
width: 24px;
height: 24px;
border: none;
background: gray;
font-weight: bold;
`;
const Modal = ({selectedPlayer,closeSelectedModal}) => {
  return(
    <SelectedComponent>
      <Button onClick={closeSelectedModal}>X</Button>
      <img style={{width: `30%`}} src={selectedPlayer.img} alt="" />
      <Chart selectedPlayer={selectedPlayer}/>
    </SelectedComponent>
  )
}

export default Modal;