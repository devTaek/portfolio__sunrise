import {useContext} from 'react';
import { Link } from 'react-router-dom'
import { CommunityContext } from '../../store/Context/SunriseContext';
import './notice.scss'



const Notice = () => {
  const {communityBoard} = useContext(CommunityContext)
  const changeInputBox = (e) => {
    const text = e.target.value;
    console.log(text);
  }
  console.log(communityBoard)
  return (
    <section className="board">
        <div className="board-title">
          <div className="container">
            <h3>공지사항</h3>
          </div>
        </div>

        {/* <!-- board seach area --> */}
        <div id="board-search">
          <div className="container">
            <div className="search-window">
              <form onSubmit={changeInputBox}>
                <div className="search-wrap">
                  <input id="search" type="text" name="" placeholder="검색어를 입력해주세요." value="text" onChange={changeInputBox}/>
                  <button type="submit" className="btn btn-dark">검색</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* <!-- board list area --> */}
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
                <tr>
                  <td>1</td>
                  <th><Link>[공지사항] 썬라이즈팀 기본 수칙</Link></th>
                  <td>2024.04.13</td>
                </tr>

                <tr>
                  <td>2</td>
                  <th><Link href="#!">[공지사항] 회비관련 안내</Link></th>
                  <td>2024.04.15</td>
                </tr>

                <tr>
                  <td>3</td>
                  <th><Link href="#!">[공지사항] 구장 안내</Link></th>
                  <td>2024.05.15</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
    </section>
  )
}

export default Notice
