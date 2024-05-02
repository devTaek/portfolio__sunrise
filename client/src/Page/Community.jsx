import PageContainer from '../components/PageContainer';
import CommunityContainer from '../container/Community/CommunityContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';

const Community = () => {
  return(
    <PageContainer header={<Header />} footer={<Footer />}>
      <CommunityContainer />
    </PageContainer>
  )
}

export default Community;