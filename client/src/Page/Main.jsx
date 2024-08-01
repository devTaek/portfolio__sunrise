import PageContainer from '../components/PageContainer';
import MainContainer from '../container/Main/MainContainer';

import Header from '../container/Header/HeaderContainer';

function Main() {
  return (
    <PageContainer header={<Header />}>
      <MainContainer />
    </PageContainer>
  )
}

export default Main;