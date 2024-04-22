import React from "react";
import './Main.scss'

import Title from "../common/Title"

import MainPlayers from "./players/MainPlayers";
import MainMatch from "./match/MainMatch";
import MainManage from "./manage/MainManage";
import MainCommunity from "./community/MainCommunity";


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