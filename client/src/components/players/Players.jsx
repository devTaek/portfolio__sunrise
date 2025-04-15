import {useState, useEffect} from 'react';
import './players.scss';


import Title from '../common/Title';
import DisplayCountSelector from '../common/DisplayCountSelector';
import PostList from './sub/PostList';
import Pagination from '../common/Pagination';
import { playersState } from '../../store/recoil/atoms/state';
import { useRecoilValue } from 'recoil';


const Players = () => {

  const playersList = useRecoilValue(playersState);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [sortedByStats, setSortedByStats] = useState([]);

  const options = [
    '체력',
    '침착성',
    '정확성',
    '공간능력',
    '판단력',
    '기본기',
    'ㄱㄴㄷ'
  ]

  useEffect(() => {
    setSortedByStats(playersList);
  }, [playersList]);
  
  
    const onSortedByOption = (option) => {
      const statIndexMap = {
        '체력': 0,
        '침착성': 1,
        '정확성': 2,
        '공간능력': 3,
        '판단력': 4,
        '기본기': 5,
      };
    
      const index = statIndexMap[option];
      if (index !== undefined) {
        const sortedByStats = [...playersList].sort((a, b) => b.stats[index].A - a.stats[index].A);
        setSortedByStats(sortedByStats);
      } else {
        setSortedByStats(playersList);
      }
    };
  const totalDataLength = playersList.length;
  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = sortedByStats.slice(firstPostIndex, lastPostIndex);

  return (
    <div id='players'>
      <div className="container">
        <Title title="Players" backgroundImg='./img/bg-players.png'/>
        <div className="playerBox">
          <div className="container">
            <div className='search-box'>
              <div className="option">
                {options.map((item,id)=>(
                  <li 
                    key={id} 
                    onClick={
                      ()=>{
                        onSortedByOption(item)
                      }
                    } 
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
            <PostList list={currentPosts}/>
            <Pagination 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              totalDataLength={totalDataLength}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Players;