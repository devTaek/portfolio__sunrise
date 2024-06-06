import React from 'react'

const DateFilter = ({prevMonthBtn, filteredYear, filteredMonth, nextMonthBtn}) => {
  return (
    <div className="date-filter">
      <button onClick={prevMonthBtn}><img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg" alt="" /></button>
      <div className="dateBox">
        {filteredYear}.
        {filteredMonth}
      </div>
      <button onClick={nextMonthBtn}><img src="./img/nextBtn.svg" alt="" /></button>
    </div>
  )
}

export default DateFilter