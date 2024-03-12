import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components';
const SelectedComponent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 50%;
  margin: 0 auto;
  background: #0D0F19;  //#0D0F19
  text-align: center;
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
  label {
    display: grid;
    color: white;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
  {
    closeSelectedModal,
    onChangeInfo,
    handleSubmit,
    formFields
  }, 
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">구분</label>
          <select name={formFields.type} id="type" onChange={onChangeInfo}>
            <option defaultValue="type" hidden>구분</option>
            <option value="plus">수익</option>
            <option value="minus">지출</option>
          </select>
        <label htmlFor="detail">내역</label>
          <select name={formFields.detail} id="detail" onChange={onChangeInfo}>
            {/* 수익 */}
            <option defaultValue="detail" hidden>내역</option>
            <option value="absence">결석</option>
            <option value="late">지각</option>
            <option value="fee">회비</option>
            {/* 지출 */}
            <option value="stadium">구장</option>
            <option value="beverage">물</option>
            <option value="equipment">장비</option>
          </select>
        <label htmlFor="amount">금액</label>
          <input type="number" placeholder='얼마나왔냐' onChange={onChangeInfo} />
        <label htmlFor="extra-info">비고</label>
          <textarea name="extra-info" id="extra-info" cols="50" rows="3" placeholder='할말더있어?' onChange={onChangeInfo}></textarea>
        <input type="submit" value="등록"/>
      </form>
    </SelectedComponent>,
    document.getElementById('modal')
  )
})

export default Modal
