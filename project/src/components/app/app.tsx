import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
import LoadingScreen from '../loading/loading';
import { mockReviews } from '../../mock';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

const App = (): JSX.Element => {

  const { isDataLoaded, offersByCity, authorizationStatus } = useAppSelector((state) => state);

  if (isDataLoaded) {
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
            offersByCity && offersByCity.length ? <MainScreen /> : <MainEmptyScreen />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen
                offers={offersByCity}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <RoomScreen
              reviews={mockReviews}
            />
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
