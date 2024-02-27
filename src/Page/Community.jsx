import React from 'react';

import PageContainer from '../components/PageContainer';
import CommunityContainer from '../container/CommunityContainer';

import Header from './Header';
import Footer from './Footer';

const Community = () => {
  return(
    <PageContainer header={<Header />} footer={<Footer />}>
      <CommunityContainer />
    </PageContainer>
  )
}

export default Community;