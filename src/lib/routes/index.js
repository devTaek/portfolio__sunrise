import {Main, Players, Match, Manage, Community} from '../../Page/index';

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
  }
]

export default routes