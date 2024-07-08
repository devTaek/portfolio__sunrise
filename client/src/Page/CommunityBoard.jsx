import PageContainer from '../components/PageContainer';
import Board from '../components/community/sub/Board';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';

const CommunityBoard = () => {

  return(
    <PageContainer header={<Header />} footer={<Footer />}>
      <Board />
    </PageContainer>
  )
}

export default CommunityBoard;