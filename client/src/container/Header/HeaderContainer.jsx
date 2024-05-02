import React from "react";
import Header from '../../components/Header/Header';

import { HeaderContext } from "../../store/Context/SunriseContext";

const CommunityContainer = () => {
  
  const headerMenu = [
    {id: 1, name:"PLAYERS", address:"/players"},
    {id: 2, name:"MATCH", address:"/match"},
    {id: 3, name:"MANAGE", address:"/manage"},
    {id: 4, name:"COMMUNITY", address:"/community"},
  ]

  const snsMenu = [
    {id: 1, name:"YOUTUBE", adress:"/", img:"./img/youtube.svg"},
    {id: 2, name:"FACEBOOK", address:"/", img:"./img/facebook.svg"},
    {id: 3, name:"KAKAO", address:"/", img:"./img/kakao.svg"},
    {id: 4, name:"BLOG", address:"/", img:"./img/blog.svg"},
  ]

  return(
    <HeaderContext.Provider value={{headerMenu, snsMenu}}>
      <Header />
    </HeaderContext.Provider>
  )
}

export default CommunityContainer;