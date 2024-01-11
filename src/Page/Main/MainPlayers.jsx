import React, {useContext, useState} from 'react';
import './scss/mainPlayers.scss';
import { PlayersListContext } from '../../store/PlayersListContext';




const MainPlayers= () => {
  const {playerList} = useContext(PlayersListContext);
  const [state, setState] = useState({
    cnt: 0
  });

  React.useEffect((cnt)=>{
    mainSlide();
  });

  const {cnt} = state;
  const slideWrap = React.useRef();
  const mainSlide=()=>{
    slideWrap.current.style.transition = `all 0.6s ease-in-out`
    slideWrap.current.style.transform = `translateX(${-1200*cnt}px)`
}

  const prevBtn= (e) => {
    e.preventDefault();
    setState({
        ...state,
        cnt: state.cnt-1
    })
  }
  const nextBtn= (e) => {
    e.preventDefault();
    setState({
        ...state,
        cnt: state.cnt+1
    })
  }
  return (
    <section id='mainPlayers'>
      <div className="container">
        <h1>PLAYERS</h1>
        <div className="gap">
          <button onClick={prevBtn} className='prev-btn'>left</button>
          <div ref={slideWrap} className="main-players-box">
              {playerList.map((item,id) => (
                <li key={item.id}>
                  <img src="./img/4254b1223bdb-dybala21-copia.png" alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
          </div>
          <button onClick={nextBtn} className='next-btn'>right</button>
        </div>
      </div>
    </section>  
  )
}

export default MainPlayers
