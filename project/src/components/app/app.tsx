import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyListScreen from '../../pages/my-list-page/my-list-page';
import AuthorizationScreen from '../../pages/authorization-page/authorization-page';
import MoviePageScreen from '../../pages/film-page/film-page';
import AddReviewScreen from '../../pages/add-review-page/add-review-page';
import PlayerScreen from '../../pages/player-page/player-page';
import NotFoundScreen from '../../pages/not-found-page/not-found-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

type MainProp = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: MainProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {<MainPage title={title} genre={genre} year={year}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<AuthorizationScreen />}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
