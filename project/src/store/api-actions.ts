import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { AppDispatch, State } from '../types/state';
import {Films} from '../types/films';
import { loadFilms, setError, setFilmsDataLoadingStatus, requireAuthorization } from './action';
import {store} from './';
import { AuthorizationStatus ,TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setFilmsDataLoadingStatus(true));
      const {data} = await api.get<Films[]>('films');
      dispatch(setFilmsDataLoadingStatus(false));
      dispatch(loadFilms(data));
    });
