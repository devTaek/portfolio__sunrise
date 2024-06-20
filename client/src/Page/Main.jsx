import PageContainer from '../components/PageContainer';
import MainContainer from '../container/Main/MainContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <MainContainer />
    </PageContainer>
  )
}

export default Main;