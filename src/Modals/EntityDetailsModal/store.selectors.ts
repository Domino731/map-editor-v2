import {RootState} from "../../store/store.ts";
import {createSelector} from "@reduxjs/toolkit";

const state = (state: RootState) => state.ENTITIES_DETAILS_MODAL;

const entityData = createSelector(state, (state) => state.entityData);
const animationsScale = createSelector(state, state => state.animationsScale);
const areasSettings = createSelector(state, state => state.entityAreas.settings);
export const entityDetailsModalSelectors = {
    entityData,
    animationsScale,
    areasSettings
}