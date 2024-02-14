import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PlayersListContext, MatchListContext,CommunityContext } from './store/PlayersListContext';

//import Notice from './Page/Notice';
import Header from './Page/Header';
import Main from './Page/Main/Main';
import Players from './Page/Players';
import Match from './Page/Match';
import Manage from './Page/Manage';
import Community from './Page/Community';


function App() {


  // 데이터 어떻게 다룰지 생각좀 해봅시다
  const playerList = [
    {
      id: 1,
      name: '김지강',
      img: './img/Player/img_player1.png'
    },
    {
      id: 2,
      name: '나예석',
      img: './img/Player/img_player2.png'
    },
    {
      id: 3,
      name: '박성우',
      img: './img/Player/img_player3.png'
    },
    {
      id: 4,
      name: '박오수',
      img: './img/Player/img_player4.png'
    },
    {
      id: 5,
      name: '배태림',
      img: './img/Player/img_player5.png'
    },{
      id: 6,
      name: '백재우',
      img: './img/Player/img_player6.png'
    },
    {
      id: 7,
      name: '서정훈',
      img: './img/Player/img_player7.png'
    },
    {
      id: 8,
      name: '송석주',
      img: './img/Player/img_player8.png'
    },
    {
      id: 9,
      name: '이경부',
      img: './img/Player/img_player9.png'
    },
    {
      id: 10,
      name: '이대현',
      img: './img/Player/img_player1.png'
    },
    {
      id: 11,
      name: '이종명',
      img: './img/Player/img_player2.png'
    },
    {
      id: 12,
      name: '이혁',
      img: './img/Player/img_player3.png'
    },
    {
      id: 13,
      name: '정태균',
      img: './img/Player/img_player4.png'
    },
    {
      id: 14,
      name: '최경민',
      img: './img/Player/img_player5.png'
    },
    {
      id: 15,
      name: '한성수',
      img: './img/Player/img_player6.png'
    }
  ]

  // 이것도 너무 이상해요
  const matchList= [
    {
      id:1,
      when: '2024.01.07(일)',    // 그달의 일요일
      where: '대전 월드컵 경기장',
      time: '06:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'JEJU',
      away_logo: './img/pc-dhFC.png',
    },
    {
      id:2,
      when: '2024.01.14(일)',
      where: 'FC서울',
      time: '07:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'DAEJEON',
      away_logo: './img/pc-dhFC.png'
    },
    {
      id:3,
      when: '2024.01.21(일)',
      where: '천마풋살파크 b구장',
      time: '06:00',
      home: 'Sunrise',
      home_logo: './img/pc-logo.png',
      away: 'GEOJE',
      away_logo: './img/pc-geoje.png'
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
    },
  ];

  const communityList = [
    {
      id: 1,
      name: '손흥민, 점프맨 로고 그려진 유니폼 입고 경기에 나선다?',
      img:'./img/community-01.png',
      source: '구단소식',
    },
    {
      id: 2,
      name: '엔소 페르난데스, EPL 역대 최고 이적료로 첼시 FC 이적한다',
      img:'./img/community-02.png',
      source: '구단소식',
    },
    {
      id: 3,
      name: '슈퍼컴퓨터가 예측한 2022-23 시즌 프리미어 리그 우승팀은?',
      img:'./img/community-03.png',
      source: '구단소식',
    },
    {
      id: 4,
      name: '두 한국 기업이 프리미어 리그 ‘첼시 FC’ 인수전에 뛰어들었다',
      img:'./img/community-04.png',
      source: '구단소식',
    },
    {
      id: 5,
      name: '손흥민 & 해리 케인, EPL 역대 최다 합작골 신기록 작성',
      img:'./img/community-05.png',
      source: '구단소식',
    },
    {
      id: 6,
      name: '토트넘 & 첼시가 한국 ‘괴물’ 수비수 김민재를 두고 영입 경쟁 나...',
      img:'./img/community-06.png',
      source: '구단소식',
    },
    
  ]

  return (
    <div className="App">
      <PlayersListContext.Provider value={{playerList}}>
      <MatchListContext.Provider value={{matchList}}>
      <CommunityContext.Provider value={{communityList}}>
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
      </CommunityContext.Provider>
      </MatchListContext.Provider>
      </PlayersListContext.Provider>
    </div>
  );
}

export default App;
