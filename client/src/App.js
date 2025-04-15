import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import routes from "./lib/routes/index";
import { CommunityBoard } from "./Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <RecoilRoot>
            <Routes>
              {routes.map(({ element, path }, id) => (
                <Route key={id} path={path} element={element} />
              ))}
              <Route exact path="/community/board/:id" element={<CommunityBoard />} />
            </Routes>
          </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}
export default App;