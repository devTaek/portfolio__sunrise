import {Main, Players, Match, Manage, Community, CommunityBoard} from '../../Page/index';

const routes = [
  {
    path: "/",
    element: <Main />,
    exact: true,
  },
  {
    path: "/players",
    element: <Players />,
    exact: true,
  },
  {
    path: "/match",
    element: <Match />,
    exact: true,
  }
  ,
  {
    path: "/manage",
    element: <Manage />,
    exact: true,
  }
  ,
  {
    path: "/community",
    element: <Community />,
    exact: true,
  },
  {
    path: "/community/board/:id",
    element: <CommunityBoard />,
    exact: true,
  },
]

export default routes