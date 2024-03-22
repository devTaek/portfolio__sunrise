import React from "react";
import './Main.scss'

import Title from "../common/Title"
import {
  MainPlayers,
  MainMatch, 
  MainManage,
  MainCommunity
} from "./sub";


const Main = () => {
  return (
    <main id='main'>
      <div className="container">
        <Title title="Welcome to the sunrise scoccer team"/>
        <div className="main_box">
          <MainMatch />
          <MainPlayers />
          <MainManage />
          <MainCommunity />
        </div>
      </div>
    </main>
  )
}

export default Main;