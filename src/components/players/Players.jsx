import {useContext, useState} from 'react';
import './players.scss';

import { PlayersListContext } from '../../store/PlayersListContext';

import DisplayCountSelector from './DisplayCountSelector';
import PostList from './PostList';
import Pagination from './Pagination';


const Players = () => {
  const {playersList} = useContext(PlayersListContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = playersList.slice(firstPostIndex, lastPostIndex);
  return (
    <div id='players'>
      <div className="container">
        <title className="title">
          <h1>Players</h1>
        </title>
        <DisplayCountSelector 
          setCurrentPage={setCurrentPage} 
          setPostsPerPage={setPostsPerPage}
        />
        <div className="playerBox">
          <div className="container">
             <PostList list={currentPosts}/>
          </div>
        </div>
          <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            postsNum={playersList.length}
          />
      </div>
    </div>
  )
}
export default Players;