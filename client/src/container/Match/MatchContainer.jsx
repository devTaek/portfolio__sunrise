import React, { useEffect, useState } from "react";
import Match from '../../components/match/Match';
import {fetchData} from '../common/utils/fetchData'

import { useRecoilState } from "recoil";
import { matchState } from "../../store/recoil/atoms/state";

const MatchContainer = () => {

  const [matchList, setMatchList] = useRecoilState(matchState);

  useEffect(()=> {
    fetchData('matches', setMatchList)
  },[])

  console.log(matchList)

  return (
    <Match />
  )
}

export default MatchContainer;