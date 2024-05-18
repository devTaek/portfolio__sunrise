import { useState, useEffect } from 'react';
import { useParams, useMatch,useNavigate, Link} from 'react-router-dom';
import './board.scss';
import { fetchData } from '../../../container/common/utils/fetchData';
import Title from '../../common/Title';
import Community from '../Community';
import BoardTilte from '../../common/BoardTilte';

const Board = ({match, setThisBoard,communityList}) => {
  const [selectedOption, setSelectedOption] = useState('공지사항');

  const [board, setBoard] = useState(null)
  const id = useParams();
  const navigate = useNavigate();
  const goBackBtn = () => navigate('/community');
  
  console.log(id)

  const goBackBoard = () => {
    setThisBoard(false);
  }
  const options = [
    '공지사항',
    '갤러리',
    '건의사항',
  ]
  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }
  return(
    <section id="board">
      <div className="container">
        <Title title='Community'/>
        <div className="community-box">
          <div className="container">
            <div className="search-box">
              <div className="option">
                {options.map((item,id)=>(
                  <li key={id} onClick={selectOption}>{item}</li>
                ))}
              </div>
            </div>
            <BoardTilte title={selectedOption} />
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
            <table>
              <thead>
                <tr>
                  <th>{id.id}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Board;