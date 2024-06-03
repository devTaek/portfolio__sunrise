import { useState, useEffect } from 'react';
import Manage from '../../components/manage/Manage';
import {ManageListContext, PlayersContext} from '../../store/Context/SunriseContext';
import { fetchData } from '../common/utils/fetchData';

const ManageContainer = () => {
  
  const [manageList, setManageList] = useState([]);
  const [playersList, setPlayersList] = useState([]);

  useEffect(()=> {
    fetchData('manages', setManageList)
    fetchData('players', setPlayersList)
  }, [])
  return (
    <ManageListContext.Provider value={{manageList}}>
      <PlayersContext.Provider value={{playersList}}>
        <Manage />
      </PlayersContext.Provider>
    </ManageListContext.Provider>
  )
}

export default ManageContainer;