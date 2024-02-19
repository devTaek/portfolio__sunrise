import { forwardRef } from "react";
import styled from "styled-components";


const Modal = forwardRef(function Modal({selectedPlayer,closeSelectedModal},ref) {
  const SelectedComponent = styled.div`
    position: fixed;
    top: 116px;
    width: 1096px;
    height: 600px;
    background: gray;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    juststify-contents: space-btween;
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
  `
  return(
    <SelectedComponent>
      <Button onClick={closeSelectedModal}>X</Button>
      <img style={{width: `30%`}}src={selectedPlayer.img} alt="" />
      <div>
        <h1>여기 차트 들어올곳</h1>
      </div>
    </SelectedComponent>
  )
})

export default Modal;