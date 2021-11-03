import { createAction } from '@reduxjs/toolkit';

// export const increment = (value) => ({ type: 'INCREMENT', payload: value });

export const decrement = createAction('DECREMENT');
export const increment = createAction('INCREMENT');
export const clear = createAction('CLEAR_VALUE');
export const setValue = createAction('SET_VALUE');

console.log(decrement.toString());
