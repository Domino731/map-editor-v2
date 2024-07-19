import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EntityDetailsModalStore} from "./store.types.ts";
import {EntityModel} from "../../models/Entities.ts";
import {AllEntities} from "../../const/characters/characters.ts";

export const ENTITY_DETAILS_MODAL_REDUCER_NAME = 'ENTITIES_DETAILS_MODAL';

const initialState: EntityDetailsModalStore = {
    entityData: null
}

const entityDetailsModalSlice = createSlice({
    name: ENTITY_DETAILS_MODAL_REDUCER_NAME,
    initialState,
    reducers: {
        setEntityDataById: (state, {payload}: PayloadAction<EntityModel['id']>) => {
            state.entityData = AllEntities.find(({id}) => id === payload) ?? null;
        },
        resetState: (state) => {
            state.entityData = initialState.entityData;
        }
    }
});

export const entityDetailsModalSliceActions = entityDetailsModalSlice.actions;
export const EntityDetailsModalReducer = entityDetailsModalSlice.reducer;