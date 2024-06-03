import {useEffect, useState} from "react";
import Main from '../../components/main/Main';
import {fetchData} from '../common/utils/fetchData'

import {PlayersContext, MatchListContext, ManageListContext, CommunityContext} from '../../store/Context/SunriseContext';

// main에 들어가는 데이터들,,
const MainContainer = () => {
  const [playersList, setPlayersList] = useState([]);
  const [matchList, setMatchList] = useState([]);
  const [manageList, setManageList] = useState([]);
  const [communityList, setCommunityList] = useState([]);

  useEffect(()=> {
    fetchData('players', setPlayersList)
    fetchData('matches', setMatchList)
    fetchData('manages', setManageList)
    fetchData('community', setCommunityList)
  },[])
  return(
    <PlayersContext.Provider value={{playersList,setPlayersList}}>
      <MatchListContext.Provider value={{matchList, setMatchList}}>
      <ManageListContext.Provider value={{manageList, setManageList}}>
        <CommunityContext.Provider value={{communityList, setCommunityList}}>
          <Main />
        </CommunityContext.Provider>
      </ManageListContext.Provider>
      </MatchListContext.Provider>
    </PlayersContext.Provider>
  )
}

export default MainContainer;