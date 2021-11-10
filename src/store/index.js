import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { reducer as usersReducer } from './users';
import { reducer as valueReducer } from './value';

const rootReducer = combineReducers({
  users: usersReducer,
  value: valueReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
