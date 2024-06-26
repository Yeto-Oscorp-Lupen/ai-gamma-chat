import {createSlice} from '@reduxjs/toolkit';
import {Platform} from 'react-native';

const initialState = {
  isSubs: null,
  collection: [],
  freeRights: Platform.OS === 'ios' ? 0 : 10,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsSubs(state, action) {
      state.isSubs = action.payload;
    },
    setFreeRight(state, action) {
      state.freeRights = action.payload;
    },
    setCollection(state, action) {
      state.collection = action.payload;
    },
  },
});

export const {setIsSubs, setCollection, setFreeRight} = appSlice.actions;
export default appSlice.reducer;
