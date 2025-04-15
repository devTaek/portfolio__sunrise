import { useState, useEffect } from "react";
import Players from "../../components/players/Players";

import { fetchData } from "../common/utils/fetchData";
import { PlayersContext } from "../../store/Context/SunriseContext";
import { useRecoilState } from "recoil";
import { playersState } from "../../store/recoil/atoms/state";

const PlayersContainer = () => {
  const [playersList, setPlayersList] = useRecoilState(playersState);

  useEffect(()=> {
    fetchData('players', setPlayersList)
  },[])

  return (
    <PlayersContext.Provider value={{ playersList }}>
      <Players />
    </PlayersContext.Provider>
  );
};

export default PlayersContainer;
