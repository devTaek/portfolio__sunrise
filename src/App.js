import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {MatchListContext,CommunityContext } from './store/PlayersListContext';
import routes from './lib/routes/index';

function App() {


  const matchList = [
    {
      id:1,
      when: '2024.01.07(일)',    // 그달의 일요일
      where: '대전 월드컵 경기장',
      time: '06:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'JEJU',
      away_logo: './img/pc-dhFC.png',
      home_score: 1,
      away_score: 0,
    },
    {
      id:2,
      when: '2024.01.14(일)',
      where: 'FC서울',
      time: '07:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'DAEJEON',
      away_logo: './img/pc-dhFC.png',
      home_score: 0,
      away_score: 5,
    },
    {
      id:3,
      when: '2024.01.21(일)',
      where: '천마풋살파크 b구장',
      time: '06:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'GEOJE',
      away_logo: './img/pc-geoje.png',
      home_score: 4,
      away_score: 2,
    },
    {
      id:4,
      when: '2024.01.28(일)',
      where: '마루공원 2면',
      time: '08:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'JEONBUK',
      away_logo: './img/pc-jeonbuk.png',
      home_score: 1,
      away_score: 2,
    },
    {
      id: 5,
      date: new Date(2024, 2, 22),
      where: '마루공원 2면',
      time: '08:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'JEONBUK',
      away_logo: './img/pc-jeonbuk.png',
      home_score: 1,
      away_score: 2,
    }
  ];


  return (
    <div className="App">
      <MatchListContext.Provider value={{matchList}}>
        <BrowserRouter>
              <Routes>
                {routes.map(({element,path},id)=>(
                  <Route key={id} path={path} element={element}/>
                ))}
              </Routes>
        </BrowserRouter>
      </MatchListContext.Provider>
    </div>
  );
}

export default App;
