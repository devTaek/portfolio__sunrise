import React, {useContext} from 'react';
import './scss/players.scss';

import {PlayersListContext} from '../store/PlayersListContext';

function Players() {
  const {playerList} = useContext(PlayersListContext);
  return (
    <div id='players'>
      <div className="container">
        <h1>Players</h1>
        <ul className="playerBox">
          {playerList && playerList.map((item,id) => (
            <li key={item.id}>
              <img src="./img/4254b1223bdb-dybala21-copia.png" alt="" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Players