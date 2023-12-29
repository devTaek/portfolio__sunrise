import React,{useState} from "react";
import '../Page/notice.scss';

const Notice= ()=> {
  const [modal, setModal] = useState(false);
  const thisWeekInfo= (e)=> {
    e.preventDefault();
    setModal(true);
  }

  return(
  <div id='notice' className={modal ? 'on' : ''}>
    <h1>이번주: 7-9</h1>
    <button onClick={thisWeekInfo}>X</button>
  </div>
  )
}

export default Notice