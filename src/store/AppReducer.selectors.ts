import {RootState} from "./store.ts";
import {APP_REDUCER_NAME} from "./AppReducer.ts";
import {createSelector} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const root = (root: RootState) => root[APP_REDUCER_NAME];

const mapTilesData = createSelector(root, (state) => state.mapTilesData);
const selectedTile = createSelector(root, (state) => state.selectedTile);
const objectId = createSelector(root, (state) => state.objectId);
const rightColumnType = createSelector(root, (state) => state.rightColumnType);
const objectStage = createSelector(root, (state) => state.objectStage);
const activeModal = createSelector(root, (state) => state.activeModel);
const modalProps = createSelector(root, state => state.modalProps)
const actorType = createSelector(root, state => state.actorType);
const mapTool = createSelector(root, state => state.mapTool);
const mapLayer = createSelector(root, state => state.mapLayer);
const mapLayers = createSelector(root, state => state.mapLayers);
const mapTiles = createSelector(root, state => state.mapTiles);
export const AppSelectors = {
    mapTilesData,
    selectedTile,
    objectId,
    rightColumnType,
    objectStage,
    activeModal,
    modalProps,
    actorType,
    mapTool,
    mapLayer,
    mapLayers,
    mapTiles
}