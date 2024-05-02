import PageContainer from '../components/PageContainer';
import ManageContainer from '../container/Manage/ManageContainer';

import Header from '../container/Header/HeaderContainer';
import Footer from '../components/Footer/Footer';

const Manage = () => {
  return (
    <PageContainer header={<Header />} footer={<Footer />}>
      <ManageContainer />
    </PageContainer>
  )
}
export default Manage;