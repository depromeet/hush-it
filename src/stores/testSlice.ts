import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState = {
  id: '',
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<{id: string}>) {
      return {...action.payload};
    },
    updateTest(state, action: PayloadAction<{id: string}>) {
      const newState = {
        ...state,
        ...action.payload,
      };

      return newState;
    },
    resetState() {
      return initialState;
    },
  },
});

export const {setTest, updateTest, resetState} = testSlice.actions;

export default testSlice.reducer;
