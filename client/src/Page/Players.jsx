import PageContainer from '../container/PageContainer';
import PlayersContainer from '../container/Players';

import Header from '../container/Header';

const Players = () => {
  return (
    <PageContainer header={<Header />}>
      <PlayersContainer />
    </PageContainer>
  )
}
export default Players;