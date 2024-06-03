import {useContext, useState} from 'react';
import './players.scss';

import { PlayersContext } from '../../store/Context/SunriseContext';

import Title from '../common/Title';
import DisplayCountSelector from '../common/DisplayCountSelector';
import PostList from './PostList';
import Pagination from '../common/Pagination';


const Players = () => {

  const {playersList} = useContext(PlayersContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [sortedByStats, setSortedByStats] = useState(playersList);

  const options = [
    '체력',
    '침착성',
    '정확성',
    '공간능력',
    '판단력',
    '기본기',
  ]
  // [...playersList].sort(()=>()) : [...playersList] sort함수는 변하기때문에 기존 함수를 복사시켜서 가져온다.
  // 그 값을 sortedByStats에 정의하고난 후,
  // setSortedByStats에 상태를 업데이트시켜준다.
  // setSortedByStats의 초기값으로 기존 배열 playersList로 넣어주고 난 후
  // 기존에 props로 보내주었던 playersList의 slice함수를 setSortedByStats의 slice함수로 변경시켜준다.
  const onSortedStaminer = () => {
    const sortedByStats = [...playersList].sort((a,b)=>b.stats[0].A-a.stats[0].A);
    setSortedByStats(sortedByStats)
  }
  const onSortedComposure = () => {
    const sortedByStats = [...playersList].sort((a,b)=>b.stats[1].A-a.stats[1].A)
    setSortedByStats(sortedByStats)
  }
  const onSortedByaccuracy = () => {
    const sortedByStats = [...playersList].sort((a,b)=>b.stats[2].A-a.stats[2].A)
    setSortedByStats(sortedByStats)
  }
  const onSortedBySpace = () => {
    const sortedByStats = [...playersList].sort((a,b)=>b.stats[3].A-a.stats[3].A)
    setSortedByStats(sortedByStats)
  }
  const onSortedByJudgment = () => {
    const sortedByStats = [...playersList].sort((a,b)=>b.stats[4].A-a.stats[4].A)
    setSortedByStats(sortedByStats)
  }
  const onSortedByBasic = () => {
    const sortedByStats = [...playersList].sort((a,b)=>b.stats[5].A-a.stats[5].A)
    setSortedByStats(sortedByStats)
  }


  // 이거 봐
  // const thisfunction = () => {
  //   for(let i=0; i<6; i++) {
  //     return (console.log([...playersList].sort((a,b)=>b.stats[i].A-a.stats[i].A)))
  //   }
  // }

  const onSortedByOption = (options) => {
    switch (options) {
      case '체력':
        onSortedStaminer();
        break;
      case '침착성':
        onSortedComposure();
        break;
      case '정확성':
        onSortedByaccuracy();
        break;
      case '공간능력':
        onSortedBySpace();
        break;
      case '판단력':
        onSortedByJudgment();
        break;
      case '기본기':
        onSortedByBasic();
        break;
      default:
        break;
    }
  }
  
  
  
  
  
  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = sortedByStats.slice(firstPostIndex, lastPostIndex);
  return (
    <div id='players'>
      <div className="container">
        <Title title='Players' />
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
              postsNum={currentPosts.length}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Players;