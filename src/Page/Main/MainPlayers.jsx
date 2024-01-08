import React, {useContext} from 'react';
import './scss/mainPlayers.scss';
import { PlayersListContext } from '../../store/PlayersListContext';




const MainPlayers= () => {

  const {playerList} = useContext(PlayersListContext);
  return (
    <section id='mainPlayers'>
      <div className="container">
          <h1>PLAYERS</h1>
        <div className="gap">
          <button className='prev-btn'>left</button>
          <div className="main-players-box">
              {playerList.map((item,id) => (
                <li key={item.id}>
                  <img src="./img/4254b1223bdb-dybala21-copia.png" alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
          </div>
          <button className='next-btn'>right</button>
        </div>
      </div>
    </section>  
  )
}

export default MainPlayers
