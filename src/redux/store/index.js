import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../reducers'; 

export const addFavourite = (company) => ({
  type: 'ADD_FAVOURITE',
  payload: company,
});

export const removeFavourite = (company) => ({
  type: 'REMOVE_FAVOURITE',
  payload: company,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
