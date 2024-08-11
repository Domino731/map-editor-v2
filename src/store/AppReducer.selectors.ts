import {RootState} from "./store.ts";
import {APP_REDUCER_NAME} from "./AppReducer.ts";
import {createSelector} from "@reduxjs/toolkit";
import {defaultCellData} from "../Map/Map.tsx";

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
const actorsOnMap = createSelector(root, state => state.actorsOnMap);
const treeHoveredObjectUuid = createSelector(root, state => state.treeHoveredObjectUuid);
const mapSettings = createSelector(root, state => state.mapSettings);
const getMapTilesData = createSelector(root, (state) => (x: number, y: number) => {
    // {...defaultCellData, zIndex: 0}
    const data = state.mapTiles.find(el => el.x === x && el.y === y);
    if (data) return data;
    return {x, y, tiles: [{...defaultCellData, zIndex: 0}]}
});
const mapTiles = createSelector(root, (state) => state.mapTiles);


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
    actorsOnMap,
    treeHoveredObjectUuid,
    mapSettings,
    getMapTilesData,
    mapTiles
}