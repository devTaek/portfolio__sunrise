import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PlayersListContext } from './store/PlayersListContext';

//import Notice from './Page/Notice';
import Header from './Page/Header';
import Main from './Page/Main/Main';
import Players from './Page/Players';
import Match from './Page/Match';
import Manage from './Page/Manage';
import Community from './Page/Community';


function App() {

  const playerList = [
    {
      id: 1,
      name: '김지강',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 2,
      name: '나예석',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 3,
      name: '박성우',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 4,
      name: '박오수',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 5,
      name: '배태림',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },{
      id: 6,
      name: '백재우',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 7,
      name: '서정훈',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 8,
      name: '송석주',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 9,
      name: '이경부',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 10,
      name: '이대현',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 11,
      name: '이종명',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 12,
      name: '이혁',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 13,
      name: '정태균',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 14,
      name: '최경민',
      img: './img/4254b1223bdb-dybala21-copia.png'
    },
    {
      id: 15,
      name: '한성수',
      img: './img/4254b1223bdb-dybala21-copia.png'
    }
  ]

  const matchList= [
    {
      when: '7일',    // 그달의 일요일
      where: '천마풋살파크 a구장',
      time: '7-9'
    },
    {
      when: '14일',
      where: '마루공원 1면',
      time: '7-9'
    },
    {
      when: '21일',
      where: '천마풋살파크 b구장',
      time: '7-9'
    },
    {
      when: '28일',
      where: '마루공원 2면',
      time: '7-9'
    },
  ];


  return (
    <div className="App">
      <PlayersListContext.Provider value={{playerList}}>
        <BrowserRouter>
          {/* <Notice /> */}
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/players' element={<Players />} />
            <Route path='/match' element={<Match />} />
            <Route path='/manage' element={<Manage />} />
            <Route path='/community' element={<Community />} />
          </Routes>
        </BrowserRouter>
      </PlayersListContext.Provider>
    </div>
  );
}

export default App;
