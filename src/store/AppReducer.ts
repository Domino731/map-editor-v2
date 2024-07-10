import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from "./AppReducer.types.ts";
import {create2DArray} from "../utils/array.ts";
import {RightColumnTabs} from "../RightColumn/RightColumn.const.ts";

export const APP_REDUCER_NAME = 'APP';

const initialState: AppState = {
    mapTilesData: create2DArray(40, 40, null),
    objectId: null,
    selectedTile: null,
    rightColumnType: RightColumnTabs.Tiles
}

const appSlice = createSlice({
    name: APP_REDUCER_NAME,
    initialState,
    reducers: {
        setObjectId: (state, action: PayloadAction<AppState['objectId']>) => {
            state.objectId = action.payload;
        },
        setRightColumnType: (state, action: PayloadAction<AppState['rightColumnType']>) => {
            state.rightColumnType = action.payload;
        },
        setSelectedTile: (state, action: PayloadAction<AppState['selectedTile']>) => {
            state.selectedTile = action.payload;
        }
    },
});

export const AppSliceActions = appSlice.actions;
export const appReducer = appSlice.reducer;