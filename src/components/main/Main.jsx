import React from "react";
import './Main.scss'


import MainPlayers from "./MainPlayers";
// import MainMatch from './MainMatch';
// import MainManage from './MainManage';
// import MainCommunity from './MainCommunity';

const Main = () => {
  return (
    <main id='main'>
      <div className="container">
        <header className="title">
          <h3>Welcome to the sunrise soccer team</h3>
        </header>
        <div className="main_box">
          <div className="container">
            <article className="players">1</article>
            <article className="match">2</article>
            <article className="manage">3</article>
            <article className="community">4</article>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;