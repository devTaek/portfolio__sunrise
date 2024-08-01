import {useContext, useState, useEffect} from 'react';
import './players.scss';

import { PlayersContext } from '../../store/Context/SunriseContext';

import Title from '../common/Title';
import DisplayCountSelector from '../common/DisplayCountSelector';
import PostList from './sub/PostList';
import Pagination from '../common/Pagination';


const Players = () => {

  const {playersList} = useContext(PlayersContext);
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
  // [...playersList].sort(()=>()) : [...playersList] sort함수는 변하기때문에 기존 함수를 복사시켜서 가져온다.
  // 그 값을 sortedByStats에 정의하고난 후,
  // setSortedByStats에 상태를 업데이트시켜준다.
  // setSortedByStats의 초기값으로 기존 배열 playersList로 넣어주고 난 후
  // 기존에 props로 보내주었던 playersList의 slice함수를 setSortedByStats의 slice함수로 변경시켜준다.

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