import './board.scss';

const Board = ({props}) => {
  // 여기서 useParams() 사용

  const options = [
    '공지사항',
    '갤러리',
    '건의사항',
  ]


  return(
    <div id="board">
      <div className="container">
        /board/? 페이지
      </div>
    </div>
  )
}

export default Board;