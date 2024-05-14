import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import './notice.scss'
import Board from './Board';

const Notice = ({communityList,match}) => {
  // const [thisBoard, setThisBoard] = useState(false);
  const changeInputBox = (e) => {
    const text = e.target.value;
  }

  // const onDetailBoard = () => {
  //   setThisBoard(true)
  // }
  
  return (
    <section className="board">


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
                  <tr /* onClick={onDetailBoard} */ key={item.id}>
                    <td>{item.id}</td>
                    <th>{item.title}</th>
                    <td>{item.createDate}</td>
                  </tr>
                ))
                }
                </tbody>
              </table>
            </div>
        </div>
    </section>
  )
}

export default Notice
