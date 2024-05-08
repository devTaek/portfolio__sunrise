import PageContainer from '../components/PageContainer';
import CommunityContainer from '../container/Community/CommunityContainer';

import Notice from '../components/community/Notice';
import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';

const Community = () => {
  return(
    <PageContainer header={<Header />} footer={<Footer />}>
      <CommunityContainer >
        <Notice />
      </CommunityContainer>
    </PageContainer>
  )
}

export default Community;