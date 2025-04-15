import { Link } from 'react-router-dom'
import './notice.scss'

const Notice = ({communityList}) => {
  console.log(communityList)
  return (
    <section className="notice">
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
                {
                  communityList.map((item, id) => (
                    <tr key={id}>
                      <td>{item.notice_id}</td>
                      <th>
                        <Link to={`/community/board/${item.notice_id}`}>
                          {item.notice_title}
                        </Link>
                      </th>
                      <td>{item.create_date}</td>
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
