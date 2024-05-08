import {useContext, useEffect, useState} from 'react';
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
  const [selectedOption, setSelectedOption] = useState('공지사항');
  

  const options = [
    '공지사항',
    '갤러리',
    '건의사항',
  ]
  
  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }

  useEffect((e)=> {
    if(selectedOption === '공지사항') {
      setSelectedOption(selectedOption)
    } else if(selectedOption === '갤러리') {
      setSelectedOption(selectedOption)
    } else if(selectedOption === '건의사항') {
      setSelectedOption(selectedOption)
    }
  },[selectedOption])

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = communityList.slice(firstPostIndex, lastPostIndex);
  return (
    <div id='community'>
      <div className="container">
        <Title title='Community'/>
        <div className="communityBox">
          <div className="container">
            <div className="search-box">
              <div className="option">
                {options.map((item,id)=>(
                  <li 
                    key={id} 
                    onClick={selectOption} 
                  >
                      {item}
                  </li>
                ))}
              </div>
              <DisplayCountSelector 
                setCurrentPage={setCurrentPage} 
                setPostsPerPage={setPostsPerPage}
              />
            </div>
            <PostList 
              list={currentPosts}
              selectedOption={selectedOption}
            />
            <Pagination 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              postsNum={currentPosts.length}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community;