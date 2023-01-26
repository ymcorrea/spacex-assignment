import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home-page';
import LauncherView from '../pages/launcher-view';
import { API_ENDPOINTS } from './api-endpoints';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: `/${API_ENDPOINTS.LAUNCHER}/:id`,
    element: <LauncherView />,
  },
]);
