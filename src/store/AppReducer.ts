import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState, SetActiveModelActionProps} from "./AppReducer.types.ts";
import {create2DArray} from "../utils/array.ts";
import {RightColumnTabs} from "../RightColumn/RightColumn.const.ts";
import {Modals} from "../Modals/ModalManager.types.ts";
import {TreesData} from "../const/trees.ts";

export const APP_REDUCER_NAME = 'APP';

const initialState: AppState = {
    mapTilesData: create2DArray(40, 40, null),
    objectId: null,
    selectedTile: null,
    rightColumnType: RightColumnTabs.Tiles,
    objectStage: null,
    activeModel: null,
    modalProps: null
}

const appSlice = createSlice({
    name: APP_REDUCER_NAME,
    initialState,
    reducers: {
        setActiveModel: (state, action: PayloadAction<SetActiveModelActionProps>) => {
            state.activeModel = action.payload.modalName;
            state.modalProps = action.payload.modalProps;
        },
        setObjectId: (state, action: PayloadAction<AppState['objectId']>) => {
            state.objectId = action.payload;
            state.objectStage = initialState.objectStage;
        },
        setObjectIdWithStage: (state, action: PayloadAction<{ id: AppState['objectId'], stage: number }>) => {
            state.objectId = action.payload.id;
            state.objectStage = action.payload.stage;

        },
        setRightColumnType: (state, action: PayloadAction<AppState['rightColumnType']>) => {
            state.rightColumnType = action.payload;
        },
        setSelectedTile: (state, action: PayloadAction<AppState['selectedTile']>) => {
            state.selectedTile = action.payload;
        },
        closeModal: (state) => {
            state.activeModel = null;
            state.modalProps = null;
        }
    },
});

export const AppSliceActions = appSlice.actions;
export const appReducer = appSlice.reducer;