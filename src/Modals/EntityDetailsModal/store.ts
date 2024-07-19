import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EntityDetailsModalStore, SetEntityAnimationActionPayload} from "./store.types.ts";
import {EntityModel} from "../../models/Entities.ts";
import {AllEntities} from "../../const/characters/characters.ts";
import {GameObjectDrop} from "../../models/GameObject.ts";
import {ObjectAreasSettings} from "../ObjectDetailsModal/store.types.ts";

export const ENTITY_DETAILS_MODAL_REDUCER_NAME = 'ENTITIES_DETAILS_MODAL';

const initialState: EntityDetailsModalStore = {
    entityData: null,
    animationsScale: 3,
    entityAreas: {
        settings: {
            isTextureHighlighted: false,
            isBlackBackground: false,
            isGrid: false,
            isGroundAreaHighlighted: false,
            isGroundCollisionHighlighted: false,
            isActionsCollisionsHighlighted: false,
            isZIndexLineHighlighted: false,
            gridScale: 3
        }
    }
}

const entityDetailsModalSlice = createSlice({
    name: ENTITY_DETAILS_MODAL_REDUCER_NAME,
    initialState,
    reducers: {
        setEntityTexture: (state, {payload}: PayloadAction<{ width: number; height: number }>) => {
            if (!state.entityData) return;
            state.entityData.texture.width = payload.width;
            state.entityData.texture.height = payload.height;
        },
        setEntityGroundCollision: (state, {payload}: PayloadAction<EntityModel['groundCollision']>) => {
            if (!state.entityData) return;
            state.entityData.groundCollision = payload;
        },
        setEntityGroundPlace: (state, {payload}: PayloadAction<EntityModel['groundPlace']>) => {
            if (!state.entityData) return;
            state.entityData.groundPlace = payload;
        },
        setEntityZIndex: (state, {payload}: PayloadAction<EntityModel['zIndex']>) => {
            if (!state.entityData) return;
            state.entityData.zIndex = payload;
        },
        setEntityActionsCollisions: (state, {payload}: PayloadAction<EntityModel['actionCollisions']>) => {
            if (!state.entityData) return;
            state.entityData.actionCollisions = payload;
        },
        setEntityAreasSettings: (state, {payload}: PayloadAction<ObjectAreasSettings>) => {
            state.entityAreas.settings = payload;
        },
        setAnimationsScale: (state, {payload}: PayloadAction<EntityDetailsModalStore['animationsScale']>) => {
            state.animationsScale = payload;
        },
        setEntityDataById: (state, {payload}: PayloadAction<EntityModel['id']>) => {
            state.entityData = AllEntities.find(({id}) => id === payload) ?? null;
        },
        setEntityAnimation: (state, {payload}: PayloadAction<SetEntityAnimationActionPayload>) => {
            if (!state.entityData) return;
            state.entityData.animations[payload.animationType][payload.animationIndex] = payload.animationData;
        },
        resetAnimationsScale: (state) => {
            state.animationsScale = initialState.animationsScale;
        },
        resetState: (state) => {
            state.entityData = initialState.entityData;
        },
        deleteObjectDrop: (state, {payload}: PayloadAction<string>) => {
            if (!state.entityData) return;
            state.entityData.drop = state.entityData.drop.filter(({uuid}) => uuid !== payload);
        },
        addEntityDrop: (state, {payload}: PayloadAction<GameObjectDrop>) => {
            if (!state.entityData) return;
            state.entityData.drop.push(payload)
        }
    }
});

export const entityDetailsModalSliceActions = entityDetailsModalSlice.actions;
export const EntityDetailsModalReducer = entityDetailsModalSlice.reducer;