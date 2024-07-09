import { createSlice } from '@reduxjs/toolkit';
import {AppState} from "./AppReducer.types.ts";
import {create2DArray} from "../utils/array.ts";

export const APP_REDUCER_NAME = 'APP';

const initialState: AppState = {
  mapTilesData: create2DArray(40, 40, null)
}

const appSlice = createSlice({
  name: APP_REDUCER_NAME,
  initialState,
  reducers: {

  },
});

export const AppSliceActions = appSlice.actions;
export const appReducer = appSlice.reducer;