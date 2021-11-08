import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  console.groupEnd(action.type);

  return next(action);
};

const initialValueState = {
  value: 210,
  nextValue: 32,
};

const valueSlice = createSlice({
  name: 'value',
  initialState: initialValueState,
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
    clear(state) {
      state.value = 0;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, clear, setValue } = valueSlice.actions;

const initialUsersState = {
  loading: false,
  items: [
    {
      id: 1,
      name: 'Pavel',
    },
    {
      id: 2,
      name: 'Darina',
    },
    {
      id: 3,
      name: 'Andrei',
    },
  ],
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {
    setUsersRequest(state) {
      state.loading = true;
    },
    setUsersSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    setUsersFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUsersRequest, setUsersSuccess, setUsersFailure } =
  userSlice.actions;

export const fetchUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((userArr) => dispatch(setUsersSuccess(userArr)))
    .catch((err) => dispatch(setUsersFailure(err.message)));
};

const rootReducer = combineReducers({
  value: valueSlice.reducer,
  users: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
