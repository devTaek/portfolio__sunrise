import React from 'react'
import styled from 'styled-components'
const ManageAmountBox = ({boxTitle,money}) => {
  console.log(money)
  return (
    <ManageAmountBoxContainer>
      <div className="manageAmountBox_title">
        <span>{boxTitle}</span>
        <span>{money}</span>
      </div>
    </ManageAmountBoxContainer>
  )
}

export default ManageAmountBox

const ManageAmountBoxContainer = styled.div`
  width: 600px;
  margin: 51px 10px;
  padding: 54px;
  background-color: #18182C;
  border-radius: 40px;
  color: white;
  `