import { useContext } from "react"
import { PlayersContext } from "../../../store/Context/SunriseContext"

const ManageList = ({filteredMatches}) => {
  const {playersList} = useContext(PlayersContext);
  
  const callImg = () => {
    filteredMatches.forEach((item) => {
      playersList.forEach((player) => {
        if(item.detail === player.name) {
          item.img = player.img
        }
      })
    })
  }
  callImg();
  return (
    <ul className="list">
      {filteredMatches.map((item,id)=>{
        console.log(item.img)
        return(
        <li key={id}>
        <div className='type'>
          {item.type}
        </div>
        <div className='detail'>
          <img src={`./img/Player/${item.img}`} alt="" />
          {item.detail}
        </div>
        <div style={{color:`white`}} className='amount'>
          {item.amount}
        </div>
        <div className='extra_info'>
          {item.extra_info}
        </div>
        </li>
      )})}
      
    </ul>
  )
}

export default ManageList
