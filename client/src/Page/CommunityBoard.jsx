import {useState, useEffect} from 'react';
import PageContainer from '../components/PageContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';
import Board from '../components/community/sub/Board';

import { CommunityContext, GalleryContext } from "../../src/store/Context/SunriseContext";
import { fetchData } from "../../src/container/common/utils/fetchData";

const CommunityBoard = ({props}) => {
  const [communityList, setCommunityList] = useState([]);
  console.log(props.match)
  useEffect(()=> {
    fetchData('community', setCommunityList)
  }, [])

  return(
    <CommunityContext.Provider value={{communityList}}>
      <PageContainer header={<Header />} footer={<Footer />}>
        <Board />
      </PageContainer>
    </CommunityContext.Provider>
  )
}

export default CommunityBoard;