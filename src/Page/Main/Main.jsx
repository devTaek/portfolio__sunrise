import React,{useEffect, useState} from 'react'
import './scss/Main.scss'

import MainPlayers from './MainPlayers';
import MainMatch from './MainMatch';
import MainManage from './MainManage';
import MainCommunity from './MainCommunity';


function Main(props) {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    if(position >= 500) {
      props.setIsDark(true);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll)
    return () => 
      window.removeEventListener("scroll", onScroll);
    ;
  },[])

  return (
    <main id='main'>
      <article className="container">
      <h3>Welcome to the sunrise soccer team</h3>
      <MainPlayers/>
      <MainMatch />
      <MainManage />
      <MainCommunity />
      

      </article>
    </main>
  )
}

export default Main