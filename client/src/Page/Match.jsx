import PageContainer from '../components/PageContainer';
import MatchContainer from '../container/Match/MatchContainer';

import Header from '../container/Header/HeaderContainer';

const Match = () => {
  return (
    <PageContainer header={<Header />}>
      <MatchContainer />
    </PageContainer>
  )
}
export default Match;