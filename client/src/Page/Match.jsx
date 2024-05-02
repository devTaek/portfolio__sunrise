import PageContainer from '../components/PageContainer';
import MatchContainer from '../container/Match/MatchContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';

const Match = () => {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <MatchContainer />
    </PageContainer>
  )
}
export default Match;