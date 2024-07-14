import {RootState} from "./store.ts";
import {APP_REDUCER_NAME} from "./AppReducer.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (root: RootState) => root[APP_REDUCER_NAME];

const mapTilesData = createSelector(root, (state) => state.mapTilesData);
const selectedTile = createSelector(root, (state) => state.selectedTile);
const objectId = createSelector(root, (state) => state.objectId);
const rightColumnType = createSelector(root, (state) => state.rightColumnType);
const objectStage = createSelector(root, (state) => state.objectStage);
const activeModal = createSelector(root, (state) => state.activeModel);
const modalProps = createSelector(root, state => state.modalProps)
export const AppSelectors = {
    mapTilesData,
    selectedTile,
    objectId,
    rightColumnType,
    objectStage,
    activeModal,
    modalProps
}