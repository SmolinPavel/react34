import { createSelector } from '@reduxjs/toolkit';

const selectUsers = (state) => state.users.items;

export const selectFilteredUsers = createSelector([selectUsers], (users) =>
  users.filter(({ name }) => name.includes('w')),
);

export const badUsersSelector = (state) =>
  state.users.items.filter(({ name }) => name.includes('w'));

export const selectNewUserName = (state) => state.users.newUserName;
