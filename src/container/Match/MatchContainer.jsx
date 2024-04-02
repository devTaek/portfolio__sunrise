import React, { useEffect, useState } from "react";
import Match from '../../components/Match/Match';
import {fetchData} from '../common/utils/fetchData'

import {MatchListContext} from '../../store/Context/SunriseContext';

const MatchContainer = () => {

  const [matchList, setMatchList] = useState([]);

  useEffect(()=> {
    fetchData('match', setMatchList)
  },[])

  return (
    <MatchListContext.Provider value={{matchList, setMatchList}}>
      <Match />
    </MatchListContext.Provider>
  )
}

export default MatchContainer;