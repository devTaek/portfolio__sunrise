import React from 'react'
import Notice from './Notice';

function PostList({
  list,
  selectedOption,
  }) {
 
  return (
    <ul>
        {selectedOption === '공지사항' && <Notice />}
        {selectedOption === '갤러리' && list.map((item,id) => (
          <li key={id}>
            <img src={item.img} alt="" />
            <div className="text">
              <div className="name">{item.name}</div>
            </div>
          </li>
        ))}
        {selectedOption === '건의사항' && (
          <li>건의사항</li>
        )
        }
      </ul>
  )
}

export default PostList;