import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components';
const SelectedComponent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1096px;
  height: 50%;
  margin: 0 auto;
  background: #0D0F19;  //#0D0F19
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  border-radius: 20px;
  padding: 20px;
  @media all and (max-width: 1360px) {
    width: 90%;
  }
  @media all and (max-width: 767px) {
    width: 90%;
    height: 60%;
    padding: 10px;
    img {
      width: 50%;
      margin: 10px auto;
    }
  }
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
background: white;
color: black;
font-weight: bold;
`;
const Modal = forwardRef( function Modal (
  {closeSelectedModal}, 
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return{
      open() {
        dialog.current.showModal();
      }
    }
  });
  return createPortal (
    <SelectedComponent ref={dialog}>
      <Button  onClick={closeSelectedModal}>X</Button>
      <p>수입/지출</p>
      <select name="" id=""></select>
    </SelectedComponent>,
    document.getElementById('modal')
  )
})

export default Modal
