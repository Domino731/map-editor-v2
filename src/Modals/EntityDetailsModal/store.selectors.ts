import {RootState} from "../../store/store.ts";
import {createSelector} from "@reduxjs/toolkit";

const state = (state: RootState) => state.ENTITIES_DETAILS_MODAL;

const entityData = createSelector(state, (state) => state.entityData);

export const entityDetailsModalSelectors = {
    entityData
}