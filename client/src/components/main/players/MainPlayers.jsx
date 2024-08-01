import MainSubTitle from '../common/MainSubTitle';
import './mainPlayers.scss';
import {useState, useContext, useEffect, useRef} from 'react';

import { PlayersContext } from '../../../store/Context/SunriseContext';

const MainPlayers = () => {
  const slideRef = useRef(null);
  const {playersList} = useContext(PlayersContext);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideList, setSlideList] = useState([]);
  const [listWidth, setListWidth] = useState(0);

  // slide transform 설정
  const [style, setStyle] = useState({});


  // useContext(PlayersContext)
  // playersList -> slideList
  // 앞,뒤 인덱스 추가 -> 무한루프
  useEffect(() => {
    if(playersList && playersList.length > 0) {
      setSlideList([
        // playersList[playersList.length-1],
        ...playersList,
        // playersList[0],
      ]);
    }
  }, [playersList])


  // .player-card 너비 값
  useEffect(() => {
    if(slideRef.current !== null) {
      const card = slideRef.current.querySelector('.player-card');
      if(card) {
        const cardWidth = card.offsetWidth;
        setListWidth(cardWidth)
      }
    }
  }, [slideList])


  // 슬라이드 버튼
  // if문 -> currentIndex 범위
  const changeImg = (diff) => {
    setCurrentIndex(prevIndex =>{
      let newIndex = prevIndex + diff;
      if(newIndex < 0) {newIndex = slideList.length -1;}
      if(newIndex >= slideList.length) {newIndex = 1;}
      return newIndex;
    });
  };


  // currnetIndex에 따른 슬라이드 이동
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