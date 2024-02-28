import React, {useState} from 'react'
import Modal from './Modal';



function PostList({list}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const onShowModal = (player) => {
    setSelectedPlayer(player);
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
        {isModalOpen && (<Modal selectedPlayer={selectedPlayer} closeSelectedModal={closeSelectedModal} />)}
      </ul>
  )
}

export default PostList;