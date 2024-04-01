import {useContext} from 'react'
import {CommunityContext} from '../../../store/Context/SunriseContext'
import MainSubTitle from '../common/MainSubTitle'
import './mainCommunity.scss';

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
              <img src={item.img} alt="" />
              <div className='notice_title'>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainCommunity
