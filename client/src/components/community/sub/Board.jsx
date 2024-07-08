import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './board.scss';
import { fetchData } from '../../../container/common/utils/fetchData';
import Title from '../../common/Title';
import BoardTilte from '../../common/BoardTilte';

const Board = () => {
  const [selectedOption, setSelectedOption] = useState('공지사항');
  const [board, setBoard] = useState([]);
  
  const {id} = useParams();

  // 이전글, 다음글, 목록 페이지 이동 (useNavigate)
  const navigate = useNavigate();
  const goBackBtn = () => navigate(`/community`);
  const prevPageBtn = () => navigate(`/community/board/${parseInt(id) - 1}`)
  const nextPageBtn = () => navigate(`/community/board/${parseInt(id) + 1}`)

  useEffect(() => {
    fetchData(`community/board/${id}`, setBoard)
  }, [id])

  return(
    <section id="board">
      <div className="container">
        <Title title='Community'/>
        <div className="community-box">
          <div className="container">
            <BoardTilte title={selectedOption} />
            {board && 
              <table key={id}>
                <thead>
                  <tr>
                    <th>제목</th>
                    <td>{board.notice_title}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>내용</th>
                    <td>{board.content}</td>
                  </tr>
                  <tr>
                    <th>등록일</th>
                    <td>{board.create_date}</td>
                  </tr>
                </tbody>
              </table>
            }
            <div className="pageOption">
              <button onClick={prevPageBtn}>이전글</button>
              <button onClick={goBackBtn}>목록</button>
              <button onClick={nextPageBtn}>다음글</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Board;