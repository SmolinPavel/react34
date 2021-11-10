import { createSlice } from '@reduxjs/toolkit';

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
  newUserName: 'Valerii',
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
    setNewUser(state, action) {
      state.newUserName = action.payload;
    },
  },
});

export const { setNewUser, setUsersRequest, setUsersSuccess, setUsersFailure } =
  userSlice.actions;
export const { reducer } = userSlice;

export const fetchUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((userArr) => dispatch(setUsersSuccess(userArr)))
    .catch((err) => dispatch(setUsersFailure(err.message)));
};
