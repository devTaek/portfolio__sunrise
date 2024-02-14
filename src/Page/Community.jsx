import {useContext, useState} from 'react';
import './scss/community.scss'; 

import {CommunityContext} from '../store/PlayersListContext';

import DisplayCountSelector from './DisplayCountSelector';
import PostList from './PostList';
import Pagination from './Pagination';

function Community() {
  const {communityList} = useContext(CommunityContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = communityList.slice(firstPostIndex, lastPostIndex);

  return (
    <div id='community'>
      <div className="container">
        <title className="title">
          <h1>COMMUNITY</h1>
        </title>
        <DisplayCountSelector 
          setCurrentPage={setCurrentPage} 
          setPostsPerPage={setPostsPerPage}
        />
        <div className="communityBox">
          <div className="container">
             <PostList list={currentPosts}/>
          </div>
        </div>
          <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            postsNum={communityList.length}
          />
        </div>
    </div>
  )
}

export default Community;