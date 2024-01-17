import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PlayersListContext, MatchListContext } from './store/PlayersListContext';

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
      id:1,
      when: '2024.01.07(일) 06:00',    // 그달의 일요일
      where: '대전 월드컵 경기장',
      time: '7-9',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'JEJU',
      away_logo: './img/pc-dhFC.png',
    },
    {
      id:2,
      when: '2024.01.14(일) 07:00',
      where: 'FC서울',
      time: '7-9',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'DAEJEON',
      away_logo: './img/pc-dhFC.png'
    },
    {
      id:3,
      when: '2024.01.21(일) 06:00',
      where: '천마풋살파크 b구장',
      time: '7-9',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'GEOJE',
      away_logo: './img/pc-geoje.png'
    },
    {
      id:4,
      when: '2024.01.28(일) 08:00',
      where: '마루공원 2면',
      time: '7-9',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'JEONBUK',
      away_logo: './img/pc-jeonbuk.png',
    },
  ];


  return (
    <div className="App">
      <PlayersListContext.Provider value={{playerList}}>
      <MatchListContext.Provider value={{matchList}}>
        <BrowserRouter>
          {/* <Notice /> */}
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/players' element={<Players />} />
            <Route path='/match' element={<Match matchList={matchList}/>} />
            <Route path='/manage' element={<Manage />} />
            <Route path='/community' element={<Community />} />
          </Routes>
        </BrowserRouter>
      </MatchListContext.Provider>
      </PlayersListContext.Provider>
    </div>
  );
}

export default App;
