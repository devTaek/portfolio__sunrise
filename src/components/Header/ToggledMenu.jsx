import React from 'react'
import { Link } from 'react-router-dom'

function ToggledMenu({headerMenu, snsMenu, isToggled, setIsToggled}) {

  const menuClickAndClose= ()=> {
    setIsToggled(!isToggled)
  }

  return (
    <div className="toggle_menu">
      <div className='toggle-headerMenu'>
        <ul>
          {headerMenu.map((item, id) => (
            <li key={id}>
              <Link onClick={menuClickAndClose} to={item.address}>{item.name}</Link>
            </li>
        ))}
          </ul>
      </div>
      <div className='toggle-snsMenu'>
        <ul>
        {snsMenu.map((item,id) => (
            <li key={id}><img src={item.img} alt="" /></li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default ToggledMenu
