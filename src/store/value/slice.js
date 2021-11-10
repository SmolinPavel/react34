import { createSlice } from '@reduxjs/toolkit';

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
export const { reducer } = valueSlice;
