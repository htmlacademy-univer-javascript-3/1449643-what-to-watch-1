import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {reducer} from './reducer';
import ErrorMessage from './components/error-message/error-message';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
