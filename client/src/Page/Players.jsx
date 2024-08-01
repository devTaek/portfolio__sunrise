import PageContainer from '../components/PageContainer';
import PlayersContainer from '../container/Players/PlayersContainer';

import Header from '../container/Header/HeaderContainer';

const Players = () => {
  return (
    <PageContainer header={<Header />}>
      <PlayersContainer />
    </PageContainer>
  )
}
export default Players;