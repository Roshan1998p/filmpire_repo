import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from './services/TMDB';
import genreOrCategory from '../components/features/currentGenresOrCategory';
import userReducer from '../components/features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategory,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
