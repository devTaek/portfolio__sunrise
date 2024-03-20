import React from "react";
import './Main.scss'


import MainPlayers from "./sub/MainPlayers";
import MainMatch from './sub/MainMatch';
import MainManage from './sub/MainManage';
import MainCommunity from './sub/MainCommunity';

const Main = () => {
  return (
    <main id='main'>
      <div className="container">
        <header className="title">
          <h1>Welcome to the sunrise soccer team</h1>
        </header>
        <div className="main_box">
          <div className="container">
            <MainPlayers />
            <MainMatch />
            <MainManage />
            <MainCommunity />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;