import React, {useContext} from 'react';
import './scss/mainPlayers.scss';
import { PlayersListContext } from '../../store/PlayersListContext';




const MainPlayers= () => {

  const playerList = useContext(PlayersListContext);
  return (
    <section id='mainPlayers'>
      <div className="container">
        <div className="gap">
          <h1>PLAYERS</h1>
          <div className="main-players-box">
            <ul>
              <li>
                <img src="./img/4254b1223bdb-dybala21-copia.png" alt="" />
                <span>정태균</span>
              </li>
              <li>
                <img src="./img/4254b1223bdb-dybala21-copia.png" alt="" />
                <span>정태균</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default MainPlayers
