import React,{useEffect, useState} from 'react'
import './scss/Main.scss'

import MainPlayers from './MainPlayers';
import MainMatch from './MainMatch';
import MainManage from './MainManage';
import MainCommunity from './MainCommunity';


function Main() {


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