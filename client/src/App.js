import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";

import routes from "./lib/routes/index";
import { CommunityBoard } from "./Page";
import { communityState, galleryState, manageState, matchState, playersState } from "./store/recoil/atoms/state";
import { fetchData } from "./container/common/utils/fetchData";

function App() {

  const [playersList, setPlayersList] = useRecoilState(playersState);
  const [matchList, setMatchList] = useRecoilState(matchState);
  const [manageList, setManageList] = useRecoilState(manageState);
  // const [communityList, setCommunityList] = useRecoilState(communityState);
  // const [gallery, setGallery] = useRecoilState(galleryState);
  

  useEffect(()=> {
    fetchData('players', setPlayersList)
    fetchData('matches', setMatchList)
    fetchData('manages', setManageList)
    // fetchData('community', setCommunityList)
    // fetchData('/community/gallery', setGallery)
  },[])

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {routes.map(({ element, path }, id) => (
              <Route key={id} path={path} element={element} />
            ))}
            <Route exact path="/community/board/:id" element={<CommunityBoard />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;