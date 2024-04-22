import React from 'react'
import styled from 'styled-components'
const ManageAmountBox = ({boxTitle,money,filteredMonth,existedMoney}) => {
  return (
    <ManageAmountBoxContainer>
      <div className="manageAmountBox_title">
        {boxTitle}
        <div className="manageAmountBox_detail">
          {existedMoney ? 
            <>
              <div className="exist-money">
                {filteredMonth-1}월 이월금액
                <span>{money}</span>
              </div> 
              <div className="detail_amount">
                <span>{money}</span>
              </div>
            </>
           :
            (<div className="detail_amount">
              <span>{money}</span>
            </div>)
          }
        </div>
      </div>
    </ManageAmountBoxContainer>
  )
}

export default ManageAmountBox

const ManageAmountBoxContainer = styled.div`
  width: 600px;
  margin: 51px 10px;
  padding: 38px;
  background-color: #18182C;
  border-radius: 40px;
  color: white;
  `