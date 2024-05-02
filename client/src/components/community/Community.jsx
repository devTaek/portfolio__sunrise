import {useContext, useState} from 'react';
import './community.scss';

import {CommunityContext} from '../../store/Context/SunriseContext';

import Title from '../common/Title';
import DisplayCountSelector from '../common/DisplayCountSelector';
import PostList from './PostList';
import Pagination from '../common/Pagination';

const Community = () => {
  const {communityList} = useContext(CommunityContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = communityList.slice(firstPostIndex, lastPostIndex);

  return (
    <div id='community'>
      <div className="container">
        <Title title='Community'/>
        <div className="communityBox">
          <div className="container">
            <DisplayCountSelector 
              setCurrentPage={setCurrentPage} 
              setPostsPerPage={setPostsPerPage}
            />
            <PostList list={currentPosts}/>
            <Pagination 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              postsNum={communityList.length}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community;