import React, {useContext, useState} from 'react';
import './mainPlayers.scss';
import { PlayersContext } from '../../store/Context/SunriseContext';




const MainPlayers= () => {
  const {playerList} = useContext(PlayersContext);
  const [state, setState] = useState({
    cnt: 0
  });

  React.useEffect((cnt)=>{
    mainSlide();
  });
  const {cnt} = state;
  const slideWrap = React.useRef();
  const mainSlide=()=>{
    slideWrap.current.style.transition = `all 0.8s ease-in-out`
    slideWrap.current.style.transform = `translateX(${-1195*cnt}px)`
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
          <button onClick={prevBtn} className='prev-btn'><img src="./img/pc-prev-btn.png" alt="" /></button>
          <div ref={slideWrap} className="main-players-box">
              {playerList.map((item,id) => (
                <li key={item.id}>
                  <img src="./img/4254b1223bdb-dybala21-copia.png" alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
          </div>
          <button onClick={nextBtn} className='next-btn'><img src="./img/pc-next-btn.png" alt="" /></button>
        </div>
      </div>
    </section>  
  )
}

export default MainPlayers
