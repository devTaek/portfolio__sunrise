import PageContainer from '../container/PageContainer';
import CommunityContainer from '../container/Community';

import Header from '../container/Header';

const Community = () => {

  return(
    <PageContainer header={<Header />}>
      <CommunityContainer />
    </PageContainer>
  )
}

export default Community;