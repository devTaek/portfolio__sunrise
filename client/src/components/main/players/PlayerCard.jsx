import React from "react"

const PlayersCard = ({list, currentIndex}) => {

  return (
    <>
    {list.map((item, id) => (
        <div key={id} className='player-card'>
          <img src={`./img/Player/${item.img}`} alt="" />
        </div>
    ))}
    </>  
  )
}

export default PlayersCard
