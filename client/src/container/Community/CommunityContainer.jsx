import {useState, useEffect} from "react";
import Community from '../../components/community/Community';

import { CommunityContext, GalleryContext } from "../../store/Context/SunriseContext";
import { fetchData } from "../common/utils/fetchData";

const CommunityContainer = () => {
  const [communityList, setCommunityList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  useEffect(()=> {
    fetchData('community', setCommunityList)
    fetchData('gallery', setGalleryList)
  }, [])

  return(
    <CommunityContext.Provider value={{communityList}}>
      <GalleryContext.Provider value={{galleryList}}>
        <Community />
      </GalleryContext.Provider>
    </CommunityContext.Provider>
  )
}

export default CommunityContainer;