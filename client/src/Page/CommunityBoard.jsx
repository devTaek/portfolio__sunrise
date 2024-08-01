import PageContainer from '../components/PageContainer';
import Board from '../components/community/sub/Board';

import Header from '../container/Header/HeaderContainer';

const CommunityBoard = () => {

  return(
    <PageContainer header={<Header />}>
      <Board />
    </PageContainer>
  )
}

export default CommunityBoard;