import {useContext, useState, useRef} from 'react';
import './players.scss';

import { PlayersContext } from '../../store/Context/SunriseContext';

import DisplayCountSelector from './DisplayCountSelector';
import PostList from './PostList';
import Pagination from './Pagination';


const Players = () => {
  const {playersList} = useContext(PlayersContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const now = useRef();
  console.log(now)

  console.log(now.current)

  const option = [
    '체력',
    '침착성',
    '정확성',
    '공간능력',
    '판단력',
    '기본기',
  ]
  
  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = playersList.slice(firstPostIndex, lastPostIndex);
  return (
    <div id='players'>
      <div className="container">
        <title className="title">
          <h1 ref={now}>Players</h1>
        </title>
        <div className="playerBox">
          <div className="container">
            <div className='search-box'>
              <div className="option">
                {option.map((item,id)=>(
                  <li key={id} ref={now}>{item}</li>
                ))}
              </div>
              <DisplayCountSelector 
              setCurrentPage={setCurrentPage} 
              setPostsPerPage={setPostsPerPage}
              />
            </div>
            <PostList list={currentPosts}/>
            <Pagination 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              postsNum={playersList.length}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Players;