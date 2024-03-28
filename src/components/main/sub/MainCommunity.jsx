import {useContext} from 'react'
import {CommunityContext} from '../../../store/Context/SunriseContext'
import MainSubTitle from '../common/MainSubTitle'


const MainCommunity = () => {
  const {communityList} = useContext(CommunityContext);
  return (
    <div className="main_community">
      <div className="gap">
        <MainSubTitle
          title='COMMUNITY'
          to='/community'
        />
        <ul>
          {communityList.map((item, id)=> (
            <li key={id}>
              <div style={{color: `white`}}>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainCommunity
