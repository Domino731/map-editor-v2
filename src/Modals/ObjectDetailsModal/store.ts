import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ObjectAreasSettings, ObjectDetailsModalState, ObjectDetailsObjectAreasVectors} from "./store.types.ts";
import {AllObjects} from "../../const/allObjects.ts";
import {ActionVector, ObjectDropModel} from "../../models/tree.ts";
import {Vector} from "../../types.ts";
import {createAreaVectors} from "./store.utilts.ts";

export const OBJECT_DETAILS_MODAL_REDUCER_NAME = 'OBJECT_DETAILS_MODAL';

const initialState: ObjectDetailsModalState = {
    objectData: null,
    objectStage: null,
    objectAreas: {
        settings: {
            isTextureHighlighted: false,
            isBlackBackground: false,
            isGrid: false,
            isGroundAreaHighlighted: false,
            isGroundCollisionHighlighted: false,
            isActionsCollisionsHighlighted: false,
            isZIndexLineHighlighted: false,
            gridScale: 3
        },
        vectors: {
            texture: [],
            groundCollision: [],
            actionCollisionsVectors: [],
            groundVectors: [],
            zIndexLines: [],
        },
        treeTrunk: {
            x: 0,
            y: 0
        }
    }
}

const objectDetailsModalSlice = createSlice({
    name: OBJECT_DETAILS_MODAL_REDUCER_NAME,
    initialState,
    reducers: {
        setGridScale: (state, {payload}: PayloadAction<ObjectAreasSettings['gridScale']>) => {
            state.objectAreas.settings.gridScale = payload;
        },
        setObjectAreasVectors: (state, {payload}: PayloadAction<{
            vector: Vector,
            name: keyof ObjectDetailsObjectAreasVectors
        }>) => {
            if (state.objectStage === null) return;
            state.objectAreas.vectors[payload.name][state.objectStage] = payload.vector
        },
        setObjectAreasTrunkTree: (state, {payload}: PayloadAction<{ x: number, y: number }>) => {
            state.objectAreas.treeTrunk = payload;
        },
        setObjectActionCollisionsVectors: (state, {payload}: PayloadAction<ActionVector[]>) => {
            if (state.objectStage === null) return;
            console.log(payload);
            state.objectAreas.vectors.actionCollisionsVectors[state.objectStage] = payload;
        },
        setObjectStage: (stage, action: PayloadAction<ObjectDetailsModalState['objectStage']>) => {
            stage.objectStage = action.payload;
        },
        setObjectDataById: (state, action: PayloadAction<string>) => {
            state.objectData = AllObjects.find(({id}) => id === action.payload);
            state.objectStage = 0;
            if (state.objectData) {
                const areasData = createAreaVectors(state.objectData);
                state.objectAreas.vectors.texture = areasData.texturesVectors;
                state.objectAreas.vectors.groundCollision = areasData.groundCollisionsVectors;
                state.objectAreas.vectors.actionCollisionsVectors = areasData.actionCollisionVectors;
                state.objectAreas.vectors.groundVectors = areasData.groundPlaceVectors;
                state.objectAreas.vectors.zIndexLines = areasData.zIndexLines;
                state.objectAreas.treeTrunk = areasData.treeTrunk;
            }
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
        },
        setObjectAreasSettings: (state, {payload}: PayloadAction<ObjectAreasSettings>) => {
            state.objectAreas.settings = payload;
        }
    },
});

export const objectDetailsModalSliceActions = objectDetailsModalSlice.actions;
export const ObjectDetailsModalReducer = objectDetailsModalSlice.reducer;