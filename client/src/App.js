import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/community/sub/Board";

import routes from "./lib/routes/index";
import { Community } from "./Page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ element, path }, id) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;