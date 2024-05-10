import PageContainer from '../components/PageContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';
import Board from '../components/community/sub/Board';
import Community from '../components/community/Community';

const CommunityBoard = () => {
  return(
    <PageContainer header={<Header />} footer={<Footer />}>
      <Community>
        <Board />
      </Community>
    </PageContainer>
  )
}

export default CommunityBoard;