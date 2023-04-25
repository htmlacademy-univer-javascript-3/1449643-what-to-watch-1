import App from './components/app/app';
import { filmsData } from './mocks/films';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { reviewsData } from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchFilmsAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const favoriteFilmsData = filmsData.filter((film) => film.isFavorite );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
        <Provider store = {store}>
        <ErrorMessage/>
      <App
        films = {filmsData}
        reviews = {reviewsData}
        myFilms = {favoriteFilmsData}
      />
    </Provider>
  </React.StrictMode>,
);
