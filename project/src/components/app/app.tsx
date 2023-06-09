import AddReviewPage from '../../pages/add-review-page/add-review-page';
import { AppRoute } from '../../const';
import AuthorizationPage from '../../pages/authorization-page/authorization-page';
import { Films } from '../../types/films';
import MainPage from '../../pages/main-page/main-page';
import FilmPage from '../../pages/film-page/film-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import { Reviews } from '../../types/reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';


type MainPageProp = {
  films: Films[];
  reviews: Reviews[];
  myFilms: Films[];
}


function App({films, reviews, myFilms}: MainPageProp): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {
            <MainPage
              films={films}
              myFilms={myFilms}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<AuthorizationPage />}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage films={films} myFilms={myFilms} reviews={reviews}/>}
        />
        <Route
          path={AppRoute.FilmDetails}
          element={<FilmPage films={films} myFilms={myFilms} reviews={reviews} />}
        />
        <Route
          path={AppRoute.FilmReviews}
          element={<FilmPage films={films} myFilms={myFilms} reviews={reviews} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
            authorizationStatus={authorizationStatus}
                        >
              <MyListPage
                myFilms={myFilms}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
            authorizationStatus={authorizationStatus}
                        >
              <AddReviewPage films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage films={films}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
