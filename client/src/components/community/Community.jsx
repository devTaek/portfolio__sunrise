import {useContext, useEffect, useState} from 'react';
import './community.scss';

import {CommunityContext, GalleryContext} from '../../store/Context/SunriseContext';
import Title from '../common/Title';
import Notice from './sub/Notice';

import Gallery from './sub/Gallery';
import Suggetsion from './sub/Suggetsion';

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

  useEffect((e)=> {
    if(selectedOption === '공지사항') {
      setSelectedOption(selectedOption)
    } else if(selectedOption === '갤러리') {
      setSelectedOption(selectedOption)
    } else if(selectedOption === '건의사항') {
      setSelectedOption(selectedOption)
    }
  },[selectedOption])

  useEffect(() => {
    if(selectedOption === '건의사항') {
      alert('수리중..');
    }
  }, [selectedOption])  
  
  return (
    <div id='community'>
      <div className="container">
        <Title title='Community'/>
        <div className="communityBox">
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
              <ul>
                {selectedOption === '공지사항' && <Notice communityList={communityList}/>}
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