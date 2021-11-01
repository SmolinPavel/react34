import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialValueState = {
  value: 21,
  nextValue: 3,
};

const valueReducer = (state = initialValueState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + action.payload };

    case 'DECREMENT':
      return { ...state, value: state.value - action.payload };

    default:
      return state;
  }
};

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
  ],
};

const usersReducer = (state = initialUsersState) => {
  return state;
};

const rootReducer = combineReducers({
  value: valueReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
