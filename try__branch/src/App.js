import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Notice from './Page/Notice';
import Header from './Page/Header';
import Main from './Page/Main';

import Players from './Menu/Players';
import Match from './Menu/Match';
import Manage from './Menu/Manage';
import Community from './Menu/Community';

import {PlayersListContext} from './Context/PlayersListContext';
import {MatchListContext} from './Context/MatchListContext';


const App= ()=> {
  const playersList= [
    {
      id: 1,
      name: '정태균',
      상태: '정규'
    },
    {
      id: 2,
      name: '이경부',
      상태: '정규'
    },
    {
      id: 3,
      name: '서정훈',
      상태: '정규'
    },
    {
      id: 4,
      name: '이혁',
      상태: '정규'
    }
  ]

  return (
      <div id="app">
        <PlayersListContext.Provider value={playersList}>
          <MatchListContext.Provider value='천마'>
            <BrowserRouter>
              <Notice />
              <Header />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/players' element={<Players />} />
                <Route path='/match' element={<Match />} />
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
