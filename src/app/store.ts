import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import roomReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    app: roomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
