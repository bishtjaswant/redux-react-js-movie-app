import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { movieApi } from './../features/movies/movieSlide';
 import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
      [movieApi.reducerPath]: movieApi.reducer,
      search:searchReducer
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
}); 

setupListeners(store.dispatch)