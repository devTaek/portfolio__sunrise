import React, {useState} from 'react';
import './notice.scss'

const Notice= () => {
  const [thisWeek, setThisWeek] = useState(false);
  const CloseBtn= ()=> {
    setThisWeek(!thisWeek);
    console.log(thisWeek);
  }

  return (
    <div className={`notice ${thisWeek ? 'on' : ''}`}>
      <h1>이번주 : 마루공원 2면 07 ~ 09</h1>
      <button className='closeNotcie' onClick={CloseBtn}>X</button>
    </div>
  )
}

export default Notice