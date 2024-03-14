import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components';
const SelectedComponent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  margin: 0 auto;
  background: #0D0F19;
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
    onCloseModal,
    onSubmit,
    formFields,
    setFormFields
  }, 
  ref
) {
  const dialog = useRef();

  
  const onChangeInfo = (e) => {
    const {name, value} = e.target;
    console.log(formFields);
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e,formFields);
    onCloseModal();
  }
  useImperativeHandle(ref, () => {
    return{
      open() {
        dialog.current.showModal();
      }
    }
  });
  return createPortal (
    <SelectedComponent ref={dialog}>
      <Button  onClick={onCloseModal}>X</Button>
      <form onSubmit={handleSubmit}>
        <label>
          구분
          <select name="type" id="type" onChange={onChangeInfo}>
            <option defaultValue="type_option" hidden>구분</option>
            <option value="입금">입금</option>
            <option value="출금">출금</option>
          </select>
        </label>
        <label>
          내역
          <select name="detail" id="detail" onChange={onChangeInfo}>
            {/* 수익 */}
            <option defaultValue="detail_option" hidden>내역</option>
            <option value="회비">회비</option>
            <option value="결석">결석</option>
            <option value="지각">지각</option>
            {/* 지출 */}
            <option value="구장대여">구장</option>
            <option value="음료">물</option>
            <option value="장비">장비</option>
          </select>
        </label>
        <label>
          금액
          <input type="number" name='amount' placeholder='얼마나왔냐' onChange={onChangeInfo} />
        </label>
        <label>
          비고
          <textarea name="extra_info" id="extra_info" cols="50" rows="3" placeholder='할말더있어?' onChange={onChangeInfo}></textarea>
        </label>
        <button type="submit">등록</button>
      </form>
    </SelectedComponent>,
    document.getElementById('modal')
  )
})

export default Modal
