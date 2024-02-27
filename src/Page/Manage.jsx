import PageContainer from '../components/PageContainer';
import ManageContainer from '../container/Manage/ManageContainer';

import Header from './Header';
import Footer from './Footer';

const Manage = () => {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <ManageContainer />
    </PageContainer>
  )
}
export default Manage;