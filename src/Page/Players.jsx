import PageContainer from '../components/PageContainer';
import PlayersContainer from '../container/Players/PlayersContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';

const Players = () => {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <PlayersContainer />
    </PageContainer>
  )
}
export default Players;