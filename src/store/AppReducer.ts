import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    AppState,
    SetActiveModelActionProps,
    SetObjectIdActionPayload, ToggleMapLayerVisibilityPayload
} from "./AppReducer.types.ts";
import {create2DArray} from "../utils/array.ts";
import {RightColumnTabs} from "../RightColumn/MapContent.ts";
import {GameActorType} from "../models/game.ts";
import {ActorOnMap} from "../Map/Map.types.ts";

export const APP_REDUCER_NAME = 'APP';

const initialState: AppState = {
    mapTilesData: create2DArray(40, 40, null),
    objectId: null,
    selectedTile: null,
    rightColumnType: RightColumnTabs.Tiles,
    objectStage: null,
    activeModel: "EntityDetails",
    modalProps: {
        entityId: 'baby_blue_chicken'
    },
    actorType: GameActorType.Tile,
    mapTool: null,
    mapLayers: [
        {isVisible: true},
        {isVisible: true},
        {isVisible: true},
    ],
    mapLayer: 0,
    actorsOnMap: [],
    treeHoveredObjectUuid: null,
    mapSettings: {
        isTilesHidden: false,
        isObjectHidden: false,
        isEntitiesHidden: false,
        isGridBorderHidden: false
    }
}

const appSlice = createSlice({
    name: APP_REDUCER_NAME,
    initialState,
    reducers: {
        setMapSettings: (state, {payload}: PayloadAction<AppState['mapSettings']>) => {
            state.mapSettings = payload;
        },
        setTreeHoveredObjectUuid: (state, {payload}: PayloadAction<AppState['treeHoveredObjectUuid']>) => {
            state.treeHoveredObjectUuid = payload;
        },
        addActorOnMap: (state, {payload}: PayloadAction<ActorOnMap>) => {
            state.actorsOnMap.push(payload)
        },
        deleteActorOnMap: (state, {payload}: PayloadAction<string>) => {
            state.actorsOnMap = state.actorsOnMap.filter(el => el.uuid !== payload)
        },
        toggleMapLayerVisibility: (state, {payload}: PayloadAction<ToggleMapLayerVisibilityPayload>) => {
            state.mapLayers[payload.layerIndex].isVisible = !state.mapLayers[payload.layerIndex].isVisible;
        },
        setMapLayer: (state, {payload}: PayloadAction<AppState['mapLayer']>) => {
            state.mapLayer = payload;
        },
        setMapTool: (state, {payload}: PayloadAction<AppState['mapTool']>) => {
            state.mapTool = payload;
        },
        setActiveModel: (state, action: PayloadAction<SetActiveModelActionProps>) => {
            state.activeModel = action.payload.modalName;
            state.modalProps = action.payload.modalProps;
        },
        setObjectId: (state, action: PayloadAction<SetObjectIdActionPayload>) => {
            state.objectId = action.payload.objectId;
            state.actorType = action.payload.actorType;
            state.objectStage = initialState.objectStage;
        },
        setObjectIdWithStage: (state, action: PayloadAction<{ id: AppState['objectId'], stage: number }>) => {
            state.objectId = action.payload.id;
            state.objectStage = action.payload.stage;

        },
        setRightColumnType: (state, action: PayloadAction<AppState['rightColumnType']>) => {
            state.rightColumnType = action.payload;
            state.objectStage = initialState.objectStage;
            state.objectId = initialState.objectId;
            state.actorType = initialState.actorType;
            state.mapTool = initialState.mapTool;
            state.selectedTile = initialState.selectedTile;
        },
        setSelectedTile: (state, action: PayloadAction<AppState['selectedTile']>) => {
            state.selectedTile = action.payload;
            state.actorType = GameActorType.Tile;
        },
        closeModal: (state) => {
            state.activeModel = null;
            state.modalProps = null;
        }
    },
});

export const AppSliceActions = appSlice.actions;
export const appReducer = appSlice.reducer;