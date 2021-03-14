import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

interface appState {
  roomId: null;
}

const initialState: appState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state,action) => {
      state.roomId = action.payload.roomId;
    }
  }
});

export const { enterRoom } = appSlice.actions;
export const selectRoomId = (state: RootState) => state.app.roomId;

export default appSlice.reducer;
