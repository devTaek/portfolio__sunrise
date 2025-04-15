import PageContainer from '../container/PageContainer';
import MainContainer from '../container/Main';

import Header from '../container/Header';

function Main() {
  return (
    <PageContainer header={<Header />}>
      <MainContainer />
    </PageContainer>
  )
}

export default Main;