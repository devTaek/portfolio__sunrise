import React from 'react'

const DateFilter = ({changeMonth, filteredYear, filteredMonth}) => {

  return (
    <div className="date-filter">
      <button onClick={() => changeMonth(-1)}><img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg" alt="" /></button>
      <div className="dateBox">
        {filteredYear}.
        {filteredMonth}
      </div>
      <button onClick={() => changeMonth(1)}><img src="./img/nextBtn.svg" alt="" /></button>
    </div>
  )
}

export default DateFilter;