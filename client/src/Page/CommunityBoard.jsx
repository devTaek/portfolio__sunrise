import PageContainer from '../components/PageContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';
import Board from '../components/community/sub/Board';

const CommunityBoard = () => {

  return(
    <PageContainer header={<Header />} footer={<Footer />}>
      <Board />
    </PageContainer>
  )
}

export default CommunityBoard;