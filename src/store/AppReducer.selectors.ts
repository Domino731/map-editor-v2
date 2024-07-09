import {RootState} from "./store.ts";
import {APP_REDUCER_NAME} from "./AppReducer.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (root: RootState) => root[APP_REDUCER_NAME];

const mapTilesData = createSelector(root, (state) => state.mapTilesData);
const selectedTile = createSelector(root, (state) => state.selectedTile);

export const AppSelectors = {
    mapTilesData,
    selectedTile
}