import MainSubTitle from '../common/MainSubTitle';
import './mainPlayers.scss';
import {useState, useContext, useEffect, useRef} from 'react';

import { PlayersContext } from '../../../store/Context/SunriseContext';

const MainPlayers = () => {
  const ref = useRef(null);
  const {playersList} = useContext(PlayersContext);
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideList, setSlideList] = useState([]);
  const [listWidth, setListWidth] = useState(0);

  const [slide, setSlide] = useState({
    transform: `translateX(-${currentIndex * listWidth}px)`,
    transition: `all 0.4s ease-in-out`,
  })

  useEffect(() => {
    if(playersList && playersList.length > 0) {
      setSlideList([
        playersList[playersList.length-1],
        ...playersList,
        playersList[0],
      ]);
    }
  }, [playersList])

  // list 너비 + 마진값 (listWidth);
  useEffect(() => {
    if(ref.current) {
      const width = ref.current.offsetWidth + 20;
      setListWidth(width);
    }
  }, [slideList])

  useEffect(() => {
    setSlide({
      transform: `translateX(-${currentIndex * listWidth}px)`,
      transition: `all 0.4s ease-in-out`,
    })
  },[currentIndex, listWidth])

  // changeImg 버튼 클릭 -> setCurrentIndex();
  const changeImg = (diff) => {
    setCurrentIndex(() => {});
  };



  return (
      <div className="container">
        <MainSubTitle 
          title='PLAYERS'
          link='/players'
          buttons={false}
          list={playersList}
          changeImg={changeImg}
        />
        <div className="slide-wrapper">
          <ul className="card-container">
            {slideList.map((item, id) => (
              <li ref={ref} key={id} style={slide} className='player-card'>
                <img src={`./img/Player/${item.img}`} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default MainPlayers