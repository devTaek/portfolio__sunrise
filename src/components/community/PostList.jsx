import React, {useState} from 'react'
import Modal from '../Community/Modal';



function PostList({list}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedContent, setIsSelectedContent] = useState(null);

  const onShowModal = (item) => {
    setIsSelectedContent(item);
    setIsModalOpen(true);
  }
  const closeSelectedModal= () => {
    setIsModalOpen(false);
  }
  return (
      <ul>
        {list.map((item,id) => (
          <li onClick={()=>onShowModal(item)} key={item.id}>
            <img src={item.img} alt="" />
            <div className="text">
              <div className="name">{item.name}</div>
            </div>
          </li>
        ))}
        {isModalOpen && (<Modal
          isSelectedContent={isSelectedContent}
          closeSelectedModal={closeSelectedModal} />)}
      </ul>
  )
}

export default PostList;