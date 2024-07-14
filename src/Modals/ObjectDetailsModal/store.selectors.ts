import {OBJECT_DETAILS_MODAL_REDUCER_NAME} from "./store.ts";
import {RootState} from "../../store/store.ts";
import {createSelector} from "@reduxjs/toolkit";


const root = (root: RootState) => root[OBJECT_DETAILS_MODAL_REDUCER_NAME];

const objectData = createSelector(root, (state) => state.objectData);
const objectStage = createSelector(root, (state) => state.objectStage);
const areasSettings = createSelector(root, (state) => state.objectAreas.settings);
const objectAreasVectors = createSelector(root, state => state.objectAreas.vectors);
const objectTreeTrunk = createSelector(root, state => state.objectAreas.treeTrunk)

export const objectDetailsModalSelectors = {
    objectData,
    objectStage,
    areasSettings,
    objectAreasVectors,
    objectTreeTrunk
}