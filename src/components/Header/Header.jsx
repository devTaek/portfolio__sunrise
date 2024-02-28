import React, {useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import './header.scss';

import ToggledMenu from './ToggledMenu';

import { HeaderContext } from '../../store/Context/SunriseContext';

function Header() {

  const {headerMenu,snsMenu} = useContext(HeaderContext);

  const [isToggled, setIsToggled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
      if (!isMobileView && isToggled) {
        setIsToggled(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isToggled, isMobileView]);

  return (
    <header style={{fontFamily: `Pretendard`}} id="header">
      <div className="container">
        <div className="gap">
          <div className="logo">
            <Link to="/"><img src='./img/pc-logo.png' alt="" /></Link>
          </div>
          <ul className="header__menu">
            {headerMenu.map((item,key)=>(
              <li key={item.id}><Link to={item.address}>{item.name}</Link></li>
            ))}
          </ul>
          <div className="sns__menu">
            {snsMenu.map((item, key)=>(
              <li key={item.id}><Link to="#"><img src={item.img} alt="" /></Link></li>
            ))}
          </div>
          <div className="toggle">
            <button onClick={()=> {setIsToggled(!isToggled)}} className="menuBtn">
              {isToggled ? <i className='close-toggle-btn'>X</i> : <i className='material-icons'>&#xe5d2;</i> }
            </button>
          </div>
        </div>
      </div>
      {isToggled && <ToggledMenu isToggled={isToggled} setIsToggled={setIsToggled} headerMenu={headerMenu} snsMenu={snsMenu}/>}
    </header>
  )




}

export default Header