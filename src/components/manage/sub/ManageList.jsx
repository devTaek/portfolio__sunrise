import React from 'react'

const ManageList = ({filteredMatches}) => {
  return (
    <ul className="list">
      {filteredMatches.map((item,id)=>(
        <li key={id}>
        <div className='type'>
          {item.type}
        </div>
        <div className='detail'>
          {item.detail}
        </div>
        <div style={{color:`white`}} className='amount'>
          {item.amount}
        </div>
        <div className='extra_info'>
          {item.extra_info}
        </div>
        </li>
      ))}
    </ul>
  )
}

export default ManageList
