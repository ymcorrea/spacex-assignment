import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home-page';
import LauncherView from '../pages/launcher-view';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/view/:id',
    element: <LauncherView />,
  },
]);
