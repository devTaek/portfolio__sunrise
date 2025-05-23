import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const Modal = forwardRef( function Modal ({ playersList, setList, onCloseModal }, ref) {
  const dialog = useRef();
  const [detailType, setDetailType] = useState([]);
  const playGround = [{name:'천마'}, {name:'마루'}, {name:'종운'}];
  const week = [{name: '1주차'},{name: '2주차'},{name: '3주차'},{name: '4주차'},{name: '5주차'}];

  const [formFields, setFormFields] = useState(
    {
      type: '',
      detail: '',
      amount: 0,
      extra_info: '',
    }
  )
  
  const onChangeInfo = (e) => {
    const {name, value} = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  
  const selectedType = (e) => {
    const name = e.target.value;

    if(['회비', '지각', '결석'].includes(name)) {
      setDetailType(playersList)
    }
    else if(name === '구장') {
      setDetailType(playGround)
    }
    else if(name === '주차비') {
      setDetailType(week)
    }
    else if(name === '음료' || name === '장비') {
      setDetailType(null)
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();

    let amount = parseFloat(formFields.amount);
    if(['구장', '음료', '장비', '주차비'].includes(formFields.type)) {
      amount = -amount;
    }

    const newData = {
      type: formFields.type,
      detail: formFields.detail,
      amount: amount,
      extra_info: formFields.extra_info,
      date: new Date().toISOString().split('T')[0],  // 현재 날짜 추가
    }

    axios.post(`${process.envREACT_APP_SERVER_BASE_URL}/api/manages`, newData)
      .then((response) => {
        setList((prev) => [...prev, response.data]);
        onCloseModal();
      })
      .catch((error) => {
        console.error('error: ', error);
      });

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
      <form className='manage-form' onSubmit={formSubmit} onChange={onChangeInfo} method='post'>
        <div className="title">수입 / 지출 입력</div>
        <label>
          구분
          <select name="type" id="type" onChange={selectedType}>
            <option defaultValue="type_option" hidden>구분</option>
            <option value="회비">회비</option>
            <option value="지각">지각</option>
            <option value="결석">결석</option>
            <option value="구장">구장</option>
            <option value="음료">음료</option>
            <option value="장비">장비</option>
            <option value="주차비">주차비</option>
          </select>
        </label>
        <label>
          내역
          {
            detailType === null ? 
              (<input type="text" name="detail" placeholder="세부 사항 입력"/>) 
              :
              <select name="detail" id="detail"  value={formFields.detail}>
                <option value="" disabled hidden>선택</option>
                {detailType && detailType.map((item,id)=>(
                  <option key={id} value={item.name}>{item.name}</option>
                ))}
              </select>
          }
        </label>
        <label>
          금액
          <input type="number" name='amount' placeholder='얼마나왔냐'/>
        </label>
        <label>
          비고
          <textarea name="extra_info" id="extra_info" cols="60" rows="3" placeholder='할말더있어?'></textarea>
        </label>
        <button className='submit-btn' type="submit">등록</button>
      </form>
    </SelectedComponent>,
    document.getElementById('modal')
  )
})

export default Modal



const SelectedComponent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  width: 30%;
  height: 80%;
  transform: translate(-50%, -50%);
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
  .title {
    display: flex;
    align-items: center;
    color: white;
    height: 85px;
    font-size: 24px;
  }
  label {
    display: grid;
    color: white;
    height: 85px;
    font-size: 12px;
    align-items: center;
    margin: 20px 0;
    select, input, textarea {
      height: 60px;
        background: #22233B;
        color: white;
        border: none;
        border-radius: 16px;
        padding: 7px;
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  .submit-btn {
    width: 100%;
    height: 85px;
    border: none;
    border-radius: 16px;
    font-size: 32px;
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