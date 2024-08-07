import {useContext, useEffect, useState} from 'react';
import './community.scss';
import {CommunityContext, GalleryContext} from '../../store/Context/SunriseContext';

import Title from '../common/Title';
import BoardTilte from '../common/BoardTilte';
import Notice from './sub/Notice';

import Gallery from './sub/Gallery';
import Suggetsion from './sub/Suggestion';

const Community = () => {
  const {communityList} = useContext(CommunityContext);
  const {galleryList} = useContext(GalleryContext)
  const [selectedOption, setSelectedOption] = useState('공지사항');

  const options = [
    '공지사항',
    '갤러리',
    '건의사항',
  ]

  const selectOption = (e) => {
    const selectText = e.target.innerText;
    setSelectedOption(selectText)
  }

  useEffect(() => {
    if(selectedOption === '건의사항') {
      alert('수리중..');
    }
  }, [selectedOption])  
  
  return (
    <div id='community'>
      <div className="container">
      <Title title="Community" backgroundImg='./img/bg-community.png'/>
        <div className="community-box">
          <div className="container">
            <div className="search-box">
                <div className="option">
                  {options.map((item,id)=>(
                    <li 
                      key={id} 
                      onClick={selectOption} 
                    >
                        {item}
                    </li>
                  ))}
                </div>
            </div>
            <BoardTilte title={selectedOption}/>
            <ul>
              {selectedOption === '공지사항' && <Notice communityList={communityList} />}
              {selectedOption === '갤러리' && <Gallery galleryList={galleryList} />}
              {selectedOption === '건의사항' && <Suggetsion />}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community;