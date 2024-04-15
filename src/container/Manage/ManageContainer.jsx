import { useState, useEffect } from 'react';
import Manage from '../../components/Manage/Manage';
import {PlayersContext} from '../../store/Context/SunriseContext';
import { fetchData } from '../common/utils/fetchData';

const ManageContainer = () => {
  
  const [manageList, setManageList] = useState([]);
  const [playersList, setPlayersList] = useState([]);
  
  useEffect(()=> {
    fetchData('member', setPlayersList)
    fetchData('manageList', setManageList)
  }, [])
  return (
    <PlayersContext.Provider value={{playersList, setPlayersList}}>
      <Manage manageList={manageList} setManageList={setManageList} />
    </PlayersContext.Provider>
  )
}

export default ManageContainer;