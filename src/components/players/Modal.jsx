import Chart from './Chart';
import styled from "styled-components";
import PlayerInfo from './PlayerInfo';

const SelectedComponent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  margin: 0 auto;
  background: #0D0F19;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 20px;
  // @media all and (max-width: 767px) {
  //   display: grid;
  // }
`;

const Button = styled.button`
z-index: 99;
position: absolute;
top: 10px;
right: 10px;
width: 24px;
height: 24px;
border: none;
border-radius: 20px;
background: gray;
font-weight: bold;
`;
const Modal = ({selectedPlayer,closeSelectedModal}) => {
  return(
    <SelectedComponent>
      <Button onClick={closeSelectedModal}>X</Button>
      <PlayerInfo selectedPlayer={selectedPlayer}></PlayerInfo>
      <Chart selectedPlayer={selectedPlayer}/>
    </SelectedComponent>
  )
}

export default Modal;