import MainSubTitle from '../common/MainSubTitle';
import './mainPlayers.scss';
import {useState, useEffect, useRef} from 'react';

import { playersState } from '../../../store/recoil/atoms/state';
import { useRecoilValue } from 'recoil';

const MainPlayers = () => {
  const slideRef = useRef(null);
  const playersList = useRecoilValue(playersState)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideList, setSlideList] = useState([]);
  const [listWidth, setListWidth] = useState(0);

  const [style, setStyle] = useState({});
  useEffect(() => {
    if(playersList && playersList.length > 0) {
      setSlideList([
        ...playersList,
      ]);
    }
  }, [playersList, currentIndex])

  useEffect(() => {
    if(slideRef.current !== null) {
      const card = slideRef.current.querySelector('.player-card');
      if(card) {
        const cardWidth = card.offsetWidth;
        setListWidth(cardWidth)
      }
    }
  }, [slideList])

  const changeImg = (diff) => {
    setCurrentIndex(prevIndex =>{
      let newIndex = prevIndex + diff;  

      if(newIndex < 0) {newIndex = slideList.length -1;}
      if(newIndex >= slideList.length) {newIndex = 0;}

      return newIndex;
    });
  };
  useEffect(() => {
    const moveSlide = () => {
      let transform = `translateX(-${currentIndex * listWidth }px)`
      if(listWidth > 0) {
        setStyle({
          transform: transform
        })
      }
    }
    moveSlide();
  }, [currentIndex, listWidth])

  return (
      <div className="container">
        <MainSubTitle 
          title='PLAYERS'
          link='/players'
          buttons={false}
          list={playersList}
          changeImg={changeImg}
        />
        <ul ref={slideRef} className="card-container" style={style}>
          {slideList.map((item, id) => (
            <li key={id} className='player-card'>
              <img src={`./img/Player/${item.img}`} alt="" />
            </li>
          ))}
        </ul>
      </div>
  )
}

export default MainPlayers