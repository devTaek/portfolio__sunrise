import React, { useContext } from 'react'
import styled from 'styled-components'
// import { ManageListContext } from '../../../store/Context/SunriseContext'
import { PlayersContext } from '../../../store/Context/SunriseContext'
import ManageList from '../../Manage/sub/ManageList'


const ManageBox = ({boxTitle}) => {
  // const {manageList} = useContext(ManageListContext)
  const {playersList} = useContext(PlayersContext)
  return (
    <ManageBoxContainer>
      <div className="manageBox_title">
        <span>{boxTitle}</span>
      </div>
      <ul className="category">
        <li>이름</li>
        <li>납부</li>
      </ul>
      <ul className='category_list'>
        {playersList.map((item,id)=>(
          <li key={id}>
            <div>{item.name}</div>
            <div>✅</div>
          </li>
        ))}
      </ul>
    </ManageBoxContainer>
  )
}

export default ManageBox

const ManageBoxContainer = styled.div`
  width: 600px;
  margin: 0 10px;
  background-color: #18182C;
  border-radius: 40px;
  color: white;
  `