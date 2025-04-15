import PageContainer from '../container/PageContainer';
import Board from '../components/community/sub/Board';

import Header from '../container/Header';

const CommunityBoard = () => {

  return(
    <PageContainer header={<Header />}>
      <Board />
    </PageContainer>
  )
}

export default CommunityBoard;