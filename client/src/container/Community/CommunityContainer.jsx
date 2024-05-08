import {useState, useEffect} from "react";
import Community from '../../components/community/Community';

import { CommunityContext } from "../../store/Context/SunriseContext";
import { fetchData } from "../common/utils/fetchData";

const CommunityContainer = () => {
  const [communityList, setCommunityList] = useState([]);

  useEffect(()=> {
    fetchData('community', setCommunityList)
  }, [])
  return(
    <CommunityContext.Provider value={{communityList}}>
      <Community />
    </CommunityContext.Provider>
  )
}

export default CommunityContainer;