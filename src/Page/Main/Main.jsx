import React from 'react'
import './scss/Main.scss'

function Main() {
  // const [position, setPosition] = useState(0);

  // function onScroll() {
  //   setPosition(window.scrollY);
  // }
  // useEffect(()=>{
  //   window.addEventListener("scroll", onScroll);
  //   return ()=> {
  //     window.removeEventListener("scroll", onScroll)
  //   };
  // },[])
  return (
    <main id='main'>
      <section className="container">
        <div className="gap">
          <article className="mainPlayers" >
            <img src='./img/4254b1223bdb-dybala21-copia.png' alt="" />
            <h3>정태균</h3>
          </article>
          <article className="mainMatch">
            <h3>MATCH</h3>
          </article>
          <article className="mainManage">
            <h3>MANAGE</h3>
          </article>
          <article className="mainCommunity">
            <h3>COMMUNITY</h3>
          </article>
        </div>
      </section>
      
    </main>
  )
}

export default Main