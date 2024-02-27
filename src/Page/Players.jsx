import PageContainer from '../components/PageContainer';
import PlayersContainer from '../container/PlayersContainer';

import Header from './Header';
import Footer from './Footer';

const Players = () => {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <PlayersContainer />
    </PageContainer>
  )
}
export default Players;