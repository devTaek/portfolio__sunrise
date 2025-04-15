import PageContainer from '../container/PageContainer';
import ManageContainer from '../container/Manage';

import Header from '../container/Header';

const Manage = () => {
  return (
    <PageContainer header={<Header />}>
      <ManageContainer />
    </PageContainer>
  )
}
export default Manage;