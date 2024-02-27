import React from 'react'

import PageContainer from '../components/PageContainer';
import MainContainer from '../container/Main/MainContainer';

import Header from './Header';
import Footer from './Footer';



function Main() {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <MainContainer />
    </PageContainer>
  )
}

export default Main;




// const [position, setPosition] = useState(0);
// function onScroll() {
//   setPosition(window.scrollY);
// }
// useEffect(()=>{
//   window.addEventListener("scroll", onScroll)
//   return () => 
//     window.removeEventListener("scroll", onScroll);
//   ;
// },[])