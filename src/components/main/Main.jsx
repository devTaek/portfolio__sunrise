import React from "react";
import './Main.scss'

import MainMatch from './MainMatch';
import MainManage from './MainManage';
import MainCommunity from './MainCommunity';

const Main = () => {
  return (
    <main id='main'>
      <article className="container">
      <h3>Welcome to the sunrise soccer team</h3>
      </article>
      <MainMatch />
      <MainManage />
      <MainCommunity />
    </main>
  )
}

export default Main;