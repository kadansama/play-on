import { Navigate, RouteObject } from 'react-router';
import App from '../App';
import { routesMasks } from '../../shared/config/routesMasks';
import { HomePage } from 'pages/home/ui';
import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/sign-up';
import { MoviesPage } from 'pages/movies/ui';
import { ProfilePage } from 'pages/profile';
import { SeriesPage } from 'pages/series';
import { TopPage } from 'pages/top';
import { CommingSoonPage } from 'pages/commingSoon';
import { Watched } from 'pages/watched';
import { Favorites } from 'pages/favorites';
import { ConnectedDevices } from 'features/ConnectedDevices';
import { FilmAboutPage } from 'pages/filmAbout';

export const routes: RouteObject[] = [
  {
    path: routesMasks.main.mask,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routesMasks.login.mask, element: <SignInPage /> },
      { path: routesMasks.signup.mask, element: <SignUpPage /> },
      { path: routesMasks.movies.mask, element: <MoviesPage /> },
      { path: routesMasks.series.mask, element: <SeriesPage /> },
      { path: routesMasks.top.mask, element: <TopPage /> },
      {
        path: routesMasks.profile.mask,
        element: <ProfilePage />,
        children: [
          { path: 'subscription', element: <CommingSoonPage /> },
          { path: 'notice', element: <CommingSoonPage /> },
          { path: 'downloaded', element: <CommingSoonPage /> },
          { path: 'devices', element: <ConnectedDevices /> },
          { path: 'help', element: <CommingSoonPage /> },
          { path: 'settings', element: <CommingSoonPage /> },
        ],
      },
      { path: routesMasks.commingSoon.mask, element: <CommingSoonPage /> },
      { path: routesMasks.alreadyWatched.mask, element: <Watched /> },
      { path: routesMasks.like.mask, element: <Favorites /> },
      { path: '*', element: <Navigate to={routesMasks.main.mask} replace /> },
      { path: routesMasks.filmAbout.mask, element: <FilmAboutPage />,},
    ],
  },
];
