import { useState, useEffect } from 'react';
import { useParams, useMatch,useNavigate, Link, useLocation} from 'react-router-dom';
import './board.scss';
import { fetchData } from '../../../container/common/utils/fetchData';
import Title from '../../common/Title';
import Community from '../Community';
import BoardTilte from '../../common/BoardTilte';

const Board = () => {
  const [selectedOption, setSelectedOption] = useState('공지사항');
  const [board, setBoard] = useState([])

  const {id} = useParams();

  const navigate = useNavigate();
  const goBackBtn = () => navigate(`/community`);
  // communityList의 id값 넘어서지 않기.
  const prevPageBtn = () => navigate(`/community/board/${parseInt(id) - 1}`)
  const nextPageBtn = () => navigate(`/community/board/${parseInt(id) + 1}`)
  

  const options = [
    '공지사항',
    '갤러리',
    '건의사항',
  ]
  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }

  useEffect(() => {
    fetchData(`community/board/${id}`, setBoard)
  }, [id])
  console.log(board)

  return(
    <section id="board">
      <div className="container">
        <Title title='Community'/>
        <div className="community-box">
          <div className="container">
            <div className="search-box">
              {/* <div className="option">
                {options.map((item,id)=>(
                  <li key={id} onClick={selectOption}>{item}</li>
                ))}
              </div> */}
            </div>
            <BoardTilte title={selectedOption} />
            {board.map((item, id) => (
              <table key={id}>
                <thead>
                  <tr>
                    <th>제목</th>
                    <td>{item.title}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>내용</th>
                    <td>{item.content}</td>
                  </tr>
                  <tr>
                    <th>등록일</th>
                    <td>{item.createDate}</td>
                  </tr>
                </tbody>
                <div className="pageOption">
                  <button onClick={prevPageBtn}>이전글</button>
                  <button onClick={goBackBtn}>목록</button>
                  <button onClick={nextPageBtn}>다음글</button>
                </div>
              </table>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Board;