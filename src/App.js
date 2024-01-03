import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Notice from './Page/Notice';
import Header from './Page/Header';
import Main from './Page/Main/Main';
import Footer from './Page/Footer'
import Players from './Page/Players';
import Match from './Page/Match';
import Manage from './Page/Manage';
import Community from './Page/Community';


function App() {
  return (
    <div className="App">
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
