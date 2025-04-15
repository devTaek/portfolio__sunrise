import { useState, useEffect } from 'react';
import Manage from '../../components/manage/Manage';
import {ManageListContext, PlayersContext} from '../../store/Context/SunriseContext';
import { fetchData } from '../common/utils/fetchData';
import { useRecoilState } from 'recoil';
import { manageState, playersState } from '../../store/recoil/atoms/state';

const ManageContainer = () => {
  
  const [manageList, setManageList] = useRecoilState(manageState);
  const [playersList, setPlayersList] = useRecoilState(playersState);

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