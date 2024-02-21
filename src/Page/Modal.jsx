import Chart from './Chart';
import styled from "styled-components";

const SelectedComponent = styled.div`
  position: fixed;
  top: 116px;
  width: 1096px;
  height: 600px;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
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