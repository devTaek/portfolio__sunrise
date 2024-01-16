import React,{useContext} from 'react'
import { PlayersListContext } from '../store/PlayersListContext'

import './scss/manage.scss'

function Manage() {

  const {playerList} = useContext(PlayersListContext);
  
  return (
    <div id='manage'>
      <div className="container">
        <title className="title">
          <h1>MANAGE</h1>
        </title>
        <div className="manageBox">
          <div className="container">
            <div className="row1">
              <button><img src="./img/pc-prev-btn.png"  alt="" /></button>
              <div className="dateBox">2024.01</div>
              <button><img src="./img/pc-next-btn.png"  alt="" /></button>
            </div>
            <div className="row2">
              <span> 이름</span>
              <span>납부 금액</span>
              <span>납부 날짜</span>
              <span>납부 여부</span>
            </div>
                <ul className="row3">
                  {playerList.map((item, id) => (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <span>20,000</span>
                      <span>24.01.01</span>
                      <span>납부완료</span>
                    </li>
                  ))}
                </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage