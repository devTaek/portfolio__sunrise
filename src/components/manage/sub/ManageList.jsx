import { useContext } from "react"
import { PlayersContext } from "../../../store/Context/SunriseContext"

const ManageList = ({filteredMatches,selectedOption}) => {
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
  
  // selectedOption, filteredMatches와의 관계
  const filteredByOption = (filteredMatches, option) => {
    if(option === '수익') {
      return filteredMatches.filter(item => item.type ==='회비')
    } else if(option === '지출') {
      return filteredMatches.filter(item => item.type === '구장')
    } else {
      return filteredMatches
    }
  }
  const filteredItem = filteredByOption(filteredMatches, selectedOption)
  callImg();
  return (
    <ul className="list">
      {filteredItem.map((item,id)=>{
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
