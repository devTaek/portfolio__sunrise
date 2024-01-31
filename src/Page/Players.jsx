import {useContext} from 'react';
import './scss/players.scss';

import {PlayersListContext} from '../store/PlayersListContext';

function Players() {
  const {playerList} = useContext(PlayersListContext);
  
  return (
    <div id='players'>
      <div className="container">
        <title className="title">
          <h1>Players</h1>
        </title>
        <ul className="playerBox">
          {playerList && playerList.map((item,id) => (
            <li key={item.id}>
              <img src={item.img} alt="" />
              <div className="text">
                <div className="name">{item.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Players