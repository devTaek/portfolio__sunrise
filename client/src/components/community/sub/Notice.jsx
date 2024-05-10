import { Link } from 'react-router-dom'
import './notice.scss'
import BoardTilte from '../../common/BoardTilte';



const Notice = ({communityList}) => {
  const changeInputBox = (e) => {
    const text = e.target.value;
  }
  return (
    <section className="board">
        <BoardTilte title='공지사항'/>

        {/* board seach area */}
        <div id="board-search">
          <div className="container">
            <div className="search-window">
              <form onSubmit={changeInputBox}>
                <div className="search-wrap">
                  <input id="search" type="text" name="" value="검색어를 입력해주세요." onChange={changeInputBox}/>
                  <button type="submit" className="btn btn-dark">검색</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* board list area */}
          <div id="board-list">
            <div className="container">
              <table className="board-table">
                <thead>
                  <tr>
                      <th scope="col" className="th-num">번호</th>
                      <th scope="col" className="th-title">제목</th>
                      <th scope="col" className="th-date">등록일</th>
                  </tr>
                </thead>
              <tbody>
                {communityList.map((item, id) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <th><Link to={`/community/board/${item.id}`}>{item.title}</Link></th>
                    <td>{item.createDate}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
    </section>
  )
}

export default Notice
