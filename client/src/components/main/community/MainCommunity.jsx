import {useContext} from 'react'
import {CommunityContext, GalleryContext} from '../../../store/Context/SunriseContext'
import MainSubTitle from '../common/MainSubTitle'
import './mainCommunity.scss';

const MainCommunity = () => {
  const {communityList} = useContext(CommunityContext);
  const gallery = useContext(GalleryContext);


  console.log(gallery)

  return (
    <div className="main-community">
      <div className="container">
        <MainSubTitle
          title='COMMUNITY'
          to='/community'
        />
        <div className="gap">
          <div className="main-gallery">
            <ul>
              <li className='fir'><img src="./img/gallery-01.png" alt="" /></li>
              <li className='sec'><img src="./img/gallery-02.png" alt="" /></li>
              <li className='th'><img src="./img/gallery-03.png" alt="" /></li>
              <li className='fou'><img src="./img/gallery-04.png" alt="" /></li>
              <li className='fif'><img src="./img/gallery-05.png" alt="" /></li>
            </ul>
          </div>
          <div>
            <div className="main-notice">
              <div className="content">
                <div className="title">Notice</div>
                <div><strong>기업은행: 01081268890</strong></div>
                <div>회비: 20,000</div>
              </div>
            </div>
            <div className="main-suggestion">
              <ul className="content">
                <li className="title">Suggestion</li>
                <li>010-8126-8890</li>
                <li>d.taegyun@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCommunity

