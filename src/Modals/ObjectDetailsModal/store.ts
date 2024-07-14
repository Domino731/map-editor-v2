import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ObjectDetailsModalState} from "./store.types.ts";
import {AllObjects} from "../../const/allObjects.ts";
import {ObjectDropModel} from "../../models/tree.ts";

export const OBJECT_DETAILS_MODAL_REDUCER_NAME = 'OBJECT_DETAILS_MODAL';

const initialState: ObjectDetailsModalState = {
    objectData: null,
    objectStage: null
}

const objectDetailsModalSlice = createSlice({
    name: OBJECT_DETAILS_MODAL_REDUCER_NAME,
    initialState,
    reducers: {
        setObjectStage: (stage, action: PayloadAction<ObjectDetailsModalState['objectStage']>) => {
            stage.objectStage = action.payload;
        },
        setObjectDataById: (state, action: PayloadAction<string>) => {
            state.objectData = AllObjects.find(({id}) => id === action.payload);
            state.objectStage = 0;
        },
        resetObjectData: (state) => {
            state.objectData = initialState.objectData;
        },
        addDrop: (state, {payload}: PayloadAction<ObjectDropModel>) => {
            if (!state.objectData || state.objectStage === null) return;
            state.objectData.specs.stages[state.objectStage].drop.push(payload);
        },
        deleteDrop: (state, {payload}: PayloadAction<string>) => {
            if (!state.objectData || state.objectStage === null) return;
            state.objectData.specs.stages[state.objectStage].drop = state.objectData.specs.stages[state.objectStage]
                .drop.filter(el => el.uuid !== payload)
        }
    },
});

export const objectDetailsModalSliceActions = objectDetailsModalSlice.actions;
export const ObjectDetailsModalReducer = objectDetailsModalSlice.reducer;