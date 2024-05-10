import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./lib/routes/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ element, path }, id) => (
            <Route exact key={id} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;