import PageContainer from '../components/PageContainer';
import CommunityContainer from '../container/Community/CommunityContainer';

import Header from '../container/Header/HeaderContainer';

const Community = () => {

  return(
    <PageContainer header={<Header />}>
      <CommunityContainer />
    </PageContainer>
  )
}

export default Community;