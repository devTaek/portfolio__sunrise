import PageContainer from '../container/PageContainer';
import MatchContainer from '../container/Match';

import Header from '../container/Header';

const Match = () => {
  return (
    <PageContainer header={<Header />}>
      <MatchContainer />
    </PageContainer>
  )
}
export default Match;