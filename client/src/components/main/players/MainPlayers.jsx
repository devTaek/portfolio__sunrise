import MainSubTitle from '../common/MainSubTitle';
import './mainPlayers.scss';
import PlayerCard from './PlayerCard';
import {useState, useContext} from 'react';

import { PlayersContext } from '../../../store/Context/SunriseContext';

const MainPlayers = () => {
  const {playersList} = useContext(PlayersContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 픽셀 이동
  const changeImg = (diff) => {
    let newIndex = currentIndex + diff;
    if(newIndex < 0) {
      newIndex = playersList.length;
    } else if (newIndex >= playersList.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  }
  console.log(currentIndex)
  return (
      <div className="container">
        <MainSubTitle 
          title='PLAYERS'
          link='/players'
          buttons={false}
          list={playersList}
          changeImg={changeImg}
        />
        <ul className="card-container">
          {<PlayerCard list={playersList} />}
        </ul>
      </div>
  )
}

export default MainPlayers