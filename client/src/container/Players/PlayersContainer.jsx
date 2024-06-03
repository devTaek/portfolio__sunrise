import { useState, useEffect } from "react";
import Players from "../../components/players/Players";

import { fetchData } from "../common/utils/fetchData";
import { PlayersContext } from "../../store/Context/SunriseContext";

const PlayersContainer = () => {
  const [playersList, setPlayersList] = useState([]);

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
