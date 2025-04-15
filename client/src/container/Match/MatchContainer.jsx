import React, { useEffect, useState } from "react";
import Match from '../../components/match/Match';
import {fetchData} from '../common/utils/fetchData'

import { useRecoilState } from "recoil";
import { matchState } from "../../store/recoil/atoms/state";

const MatchContainer = () => {

  return (
    <Match />
  )
}

export default MatchContainer;