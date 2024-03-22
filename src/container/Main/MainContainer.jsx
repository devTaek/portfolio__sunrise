import {useEffect, useState} from "react";
import Main from '../../components/Main/Main';
import {fetchData} from '../common/utils/fetchData'

import {PlayersContext} from '../../store/Context/SunriseContext';

// main에 들어가는 데이터들,,
const MainContainer = () => {
  const [playersList, setPlayersList] = useState([]);
  const [matchList, setMatchList] = useState([]);
  useEffect(()=> {
    fetchData('member', setPlayersList)
    fetchData('match', setMatchList)
  },[])
  return(
    <PlayersContext.Provider value={{playersList,setPlayersList, matchList,setMatchList}}>
        <Main />
    </PlayersContext.Provider>
  )
}

export default MainContainer;