import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ObjectAreasSettings, ObjectDetailsModalState, ObjectDetailsObjectAreasVectors} from "./store.types.ts";
import {AllObjects} from "../../const/objects/allObjects.ts";
import {ActionVector, ObjectDropModel} from "../../models/game.ts";
import {Vector} from "../../types.ts";
import {createAreaVectors} from "./store.utilts.ts";
import {GameMultiStageObjectUnion, GameSingleStageObjectUnion} from "../../models/GameObject.ts";
import {GameObjectDrop} from "../../models/GameObject.ts";

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
        setObjectAreasTrunkTree: (state, {payload}: PayloadAction<{
            x: number,
            y: number
        }>) => {
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
            const newObjectData = AllObjects.find(({id}) => id === action.payload);
            if (!newObjectData) return;
            state.objectData = newObjectData;
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
        resetState: (state) => {
            state.objectAreas = initialState.objectAreas;
            state.objectData = initialState.objectData;
            state.objectStage = initialState.objectStage;
        },
        addDrop: (state, {payload}: PayloadAction<ObjectDropModel>) => {
            if (!state.objectData || state.objectStage === null) return;
            if ((state.objectData as GameMultiStageObjectUnion).specs.stages) {
                (state.objectData as GameMultiStageObjectUnion).specs.stages[state.objectStage].drop.push(payload);
            } else {
                (state.objectData as GameSingleStageObjectUnion).specs.drop.push(payload);
            }
        },
        deleteObjectDrop: (state, {payload}: PayloadAction<string>) => {
            if (!state.objectData || state.objectStage === null) return;
            if ((state.objectData as GameMultiStageObjectUnion).specs.stages) {
                (state.objectData as GameMultiStageObjectUnion).specs.stages[state.objectStage].drop = (state.objectData as GameMultiStageObjectUnion).specs.stages[state.objectStage]
                    .drop.filter((el: GameObjectDrop) => el.uuid !== payload)
            } else {
                (state.objectData as GameSingleStageObjectUnion).specs.drop = (state.objectData as GameSingleStageObjectUnion).specs
                    .drop.filter((el: GameObjectDrop) => el.uuid !== payload)
            }

        },
        setObjectAreasSettings: (state, {payload}: PayloadAction<ObjectAreasSettings>) => {
            state.objectAreas.settings = payload;
        }
    },
});

export const objectDetailsModalSliceActions = objectDetailsModalSlice.actions;
export const ObjectDetailsModalReducer = objectDetailsModalSlice.reducer;