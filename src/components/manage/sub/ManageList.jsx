import { useContext,useEffect,useState } from "react"
import { PlayersContext } from "../../../store/Context/SunriseContext"

const ManageList = ({filteredMatches,selectedOption,sum,setSum}) => {
  const {playersList} = useContext(PlayersContext);
  
  const [amounts, setAmounts]= useState([])
  
  useEffect(()=> {
    const callImg = () => {
      filteredMatches.forEach((item) => {
        playersList.forEach((player) => {
          if(item.detail === player.name) {
            item.img = player.img
          }
          else {
            return item.detail;
          }
        })
      })
    }
    callImg();
    const amountsList = filteredMatches.map((item)=>parseInt(item.amount))
    setAmounts(amountsList)
    const sum = amountsList.reduce((a,b) => (a+b), 0);
    setSum(sum);
  },[filteredMatches, selectedOption, setSum])
  // selectedOption, filteredMatches와의 관계
  const filteredByOption = (filteredMatches, option) => {
    if(option === '수익') {
      return filteredMatches.filter(item => item.type ==='회비'||item.type ==='지각'||item.type ==='결석')

    } else if(option === '지출') {
      return filteredMatches.filter(item => item.type === '구장'||item.type ==='음료'||item.type ==='장비')
    } else {
      return filteredMatches
    }
  }

  const filteredItem = filteredByOption(filteredMatches, selectedOption)
  return (
    <ul className="list">
      {filteredItem.map((item,id)=>{
        return(
        <li key={id}>
        <div className='type'>
          {item.type}
        </div>
        <div className='detail'>
          {item.img ? <img src={`./img/Player/${item.img}`} alt="" /> : ''}
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
