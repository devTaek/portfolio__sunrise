import {useContext, useState} from 'react'
import {CommunityContext, GalleryContext} from '../../../store/Context/SunriseContext'
import MainSubTitle from '../common/MainSubTitle'
import './mainCommunity.scss';
import Content from './sub/Content';

const MainCommunity = () => {
  const {communityList} = useContext(CommunityContext);
  const gallery = useContext(GalleryContext);

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
                <Content 
                  title="Notice"
                  content={
                    <div className='details'>
                      <div><strong>회비</strong> 20,000</div>
                      <div><strong>용병</strong> 5,000</div>
                      <div>기업은행 01081268890 (정태균)</div>
                    </div>
                  }
                />
            </div>
            <div className="main-suggestion">
              <Content 
                  title="Suggestion"
                  content={
                    <div className='details'>
                      <div><strong>email</strong> d.taegyun@gmail.com</div>
                      <div><strong>phone</strong>010-8126-8890</div>
                  </div>
                  }
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCommunity

