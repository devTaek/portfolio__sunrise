import React from 'react'

const DateFilter = (props) => {
  return (
    <div className="selected-month">
      <button onClick={props.onClickPrevMonth}><img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg" alt="" /></button>
      <div className="dateBox">
        {props.filteredYear}.
        {props.filteredMonth}</div>
      <button onClick={props.onClickNextMonth}><img src="./img/nextBtn.svg" alt="" /></button>
    </div>
  )
}

export default DateFilter
