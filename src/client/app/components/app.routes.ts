// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';

import { GvHomeRoutes } from './pages/gv-home/gv-home.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,

  ...GvHomeRoutes
];
