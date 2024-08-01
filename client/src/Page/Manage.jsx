import PageContainer from '../components/PageContainer';
import ManageContainer from '../container/Manage/ManageContainer';

import Header from '../container/Header/HeaderContainer';

const Manage = () => {
  return (
    <PageContainer header={<Header />}>
      <ManageContainer />
    </PageContainer>
  )
}
export default Manage;