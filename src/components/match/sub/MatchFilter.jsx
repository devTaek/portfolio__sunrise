import React from 'react'

const MatchFilter = (props) => {
  return (
    <div className="row1">
      <button onClick={props.onClickPrevMonth}><img style={{transform: `rotate(180deg)`}} src="./img/nextBtn.svg" alt="" /></button>
      <div className='dateBox'>
        {props.filteredYear}.
        {props.filteredMonth}
      </div>
      <button onClick={props.onClickNextMonth}><img src="./img/nextBtn.svg"  alt="" /></button>
    </div>
  )
}

export default MatchFilter
