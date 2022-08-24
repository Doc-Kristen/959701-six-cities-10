import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoadingScreen from '../loading/loading';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getDataLoadedStatus, getServerErrorStatus } from '../../store/offer-data/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';
import PrivateLoginScreenRoute from '../private-login-screen-route/private-login-screen-route';

const App = (): JSX.Element => {

  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  const isServerError = useAppSelector(getServerErrorStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isCheckedAuth = (authStatus: AuthorizationStatus): boolean => authStatus === AuthorizationStatus.Unknown;
  if (isServerError) {
    return (
      <ErrorScreen />
    );
  }

  if (isDataLoaded || isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateLoginScreenRoute
              authorizationStatus={authorizationStatus}
            >
              <LoginScreen />
            </PrivateLoginScreenRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <RoomScreen />
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
};
export default App;
