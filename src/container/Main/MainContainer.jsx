import {useEffect, useState} from "react";
import Main from '../../components/Main/Main';
import {fetchData} from '../common/utils/fetchData'

import {PlayersContext, MatchListContext, CommunityContext} from '../../store/Context/SunriseContext';

// main에 들어가는 데이터들,,
const MainContainer = () => {
  const [playersList, setPlayersList] = useState([]);
  const [matchList, setMatchList] = useState([]);
  const [communityList, setCommunityList] = useState([]);

  useEffect(()=> {
    fetchData('member', setPlayersList)
    fetchData('match', setMatchList)
    fetchData('community', setCommunityList)
  },[])
  return(
    <PlayersContext.Provider value={{playersList,setPlayersList}}>
      <MatchListContext.Provider value={{matchList, setMatchList}}>
        <CommunityContext.Provider value={{communityList, setCommunityList}}>
          <Main />
        </CommunityContext.Provider>
      </MatchListContext.Provider>
    </PlayersContext.Provider>
  )
}

export default MainContainer;