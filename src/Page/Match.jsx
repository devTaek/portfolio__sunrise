import PageContainer from '../components/PageContainer';
import MatchContainer from '../container/Match/MatchContainer';

import Header from './Header';
import Footer from './Footer';

const Match = () => {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <MatchContainer />
    </PageContainer>
  )
}
export default Match;