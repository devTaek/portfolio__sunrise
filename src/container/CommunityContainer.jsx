import React from "react";
import Community from '../components/community/Community';

import { CommunityContext } from "../store/PlayersListContext";

const CommunityContainer = () => {
  
  const communityList = [
    {
      id: 1,
      name: '손흥민, 점프맨 로고 그려진 유니폼 입고 경기에 나선다?',
      img: './img/community-01.png',
      source: '구단소식',
    },
    {
      id: 2,
      name: '엔소 페르난데스, EPL 역대 최고 이적료로 첼시 FC 이적한다',
      img: './img/community-02.png',
      source: '구단소식',
    },
    {
      id: 3,
      name: '슈퍼컴퓨터가 예측한 2022-23 시즌 프리미어 리그 우승팀은?',
      img: './img/community-03.png',
      source: '구단소식',
    },
    {
      id: 4,
      name: '두 한국 기업이 프리미어 리그 ‘첼시 FC’ 인수전에 뛰어들었다',
      img: './img/community-04.png',
      source: '구단소식',
    },
    {
      id: 5,
      name: '손흥민 & 해리 케인, EPL 역대 최다 합작골 신기록 작성',
      img: './img/community-05.png',
      source: '구단소식',
    },
    {
      id: 6,
      name: '토트넘 & 첼시가 한국 ‘괴물’ 수비수 김민재를 두고 영입 경쟁 나...',
      img: './img/community-06.png',
      source: '구단소식',
    },
    
  ]

  return(
    <CommunityContext.Provider value={{communityList}}>
      <Community />
    </CommunityContext.Provider>
  )
}

export default CommunityContainer;