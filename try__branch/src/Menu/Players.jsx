import React,{useContext} from 'react'
import {Link} from 'react-router-dom';

import { PlayersListContext } from '../Context/PlayersListContext';

function Players() {
  const playersList = useContext(PlayersListContext);
  return (
    <div id='players'>
      <Link to='/'>Home</Link>
      <ul>
        {playersList.map((item)=>{
          return(
          <li key={item.id}>
            <div>{item.name}</div>
          </li>)
        })
        }
      </ul>
    </div>
  )
}

export default Players
