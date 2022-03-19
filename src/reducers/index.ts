import {combineReducers} from '@reduxjs/toolkit';
import orderReducer from '~/stores/testSlice';

const rootReducer = combineReducers({
  order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
