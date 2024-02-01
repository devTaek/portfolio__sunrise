import React from 'react'
import { Link } from 'react-router-dom'

function ToggledMenu(props) {
  
  return (
    <div className="toggle_menu">
      <div className='toggle-headerMenu'>
        <ul>
          {props.headerMenu.map((item, key) => (
            <li key={item.id}>
              <Link to={item.address}>{item.name}</Link>
            </li>
        ))}
        </ul>
      </div>
      <div className='toggle-snsMenu'>
        {props.snsMenu.map((item,key) => (
          <ul>
            <li key={item.id}><img src={item.img} alt="" /></li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default ToggledMenu
