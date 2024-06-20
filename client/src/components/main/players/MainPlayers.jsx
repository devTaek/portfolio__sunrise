import {useContext} from 'react'
import { PlayersContext } from '../../../store/Context/SunriseContext'
import MainSubTitle from '../common/MainSubTitle';
import './mainPlayers.scss';


const MainPlayers = () => {
  const {playersList} = useContext(PlayersContext);

  return (
    <div className="main-players">
      <div className="container">
        <MainSubTitle 
          title='PLAYERS'
          to='/players'
          showBtns={false}
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
