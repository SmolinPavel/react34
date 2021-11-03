import {
  createSlice,
  createReducer,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

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

// const valueReducer = createReducer(initialValueState, {
//   [increment]: (state, action) => ({
//     ...state,
//     value: state.value + action.payload,
//   }),
//   [decrement]: (state, action) => ({
//     ...state,
//     value: state.value - action.payload,
//   }),
//   [clear]: (state) => ({ ...state, value: 0 }),
//   [setValue]: (state, action) => ({ ...state, value: action.payload }),
// });

const initialUsersState = {
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
};

const usersReducer = (state = initialUsersState) => {
  return state;
};

const rootReducer = combineReducers({
  value: valueSlice.reducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
