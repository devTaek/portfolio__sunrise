import React,{useContext, useState} from 'react'
import { PlayersContext } from '../../../store/Context/SunriseContext'
import MainSubTitle from '../common/MainSubTitle';
import './mainPlayers.scss';


function MainPlayers() {
  const {playersList} = useContext(PlayersContext);
  const [cnt, setCnt] = useState(0);


  return (
    <div className="main_players">
      <div className="gap">
        <MainSubTitle 
          title='PLAYERS'
          to='/players'
        />
        <ul>
          {playersList.map((item,id)=>(
              <li key={id}>
                <img src={`./img/Player/${item.img}`} alt="" />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default MainPlayers
