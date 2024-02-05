import React from 'react'

function PostList({list}) {
  return (
      <ul>
        {list.map((item,id) => (
          <li key={item.id}>
            <img src={item.img} alt="" />
            <div className="text">
              <div className="name">{item.name}</div>
            </div>
          </li>
        ))}
      </ul>
  )
}

export default PostList
