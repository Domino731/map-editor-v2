import {TileData} from "../const/tiles/tiles.ts";
import {RightColumnTabs} from "../RightColumn/MapContent.ts";
import {ModalsUnion} from "../Modals/ModalManager.types.ts";
import {ObjectDetailsModalProps} from "../Modals/ObjectDetailsModal/ObjectDetailsModal.tsx";
import {GameActorTypeUnion} from "../models/game.ts";
import {ActorOnMap, MapToolUnion} from "../Map/Map.types.ts";
import {EntityDetailsModalProps} from "../Modals/EntityDetailsModal/EntitiesDetailsModal.tsx";

export interface AppState {
    mapTilesData: Array<Array<TileData | null>>;
    selectedTile: MapTileData | null;
    objectId: string | null;
    objectStage: number | null;
    rightColumnType: RightColumnTabs;
    activeModel: ModalsUnion | null;
    modalProps: Omit<ObjectDetailsModalProps, 'isOpen'> | Omit<EntityDetailsModalProps, 'isOpen'> | null;
    actorType: GameActorTypeUnion;
    mapTool: MapToolUnion | null;
    mapLayers: Array<MapLayer>;
    mapLayer: number;
    actorsOnMap: Array<ActorOnMap>;
    treeHoveredObjectUuid: string | null;
    mapSettings: MapSettings;
    mapTiles: Array<StoreMapTileData>;
}

export interface StoreMapTileData {
    x: number;
    y: number;
    tiles: Array<Required<MapTileData>>;
}

export interface MapSettings {
    isTilesHidden: boolean;
    isObjectHidden: boolean;
    isEntitiesHidden: boolean;
    isGridBorderHidden: boolean;
}

export interface MapLayer {
    isVisible: boolean;
}

export interface SetActiveModelActionProps {
    modalName: ModalsUnion;
    modalProps: Omit<ObjectDetailsModalProps, 'isOpen'>
}

export interface ToggleMapLayerVisibilityPayload {
    layerIndex: number;
}

export interface AddMapTileActionPayload {
    x: number;
    y: number;
    tiles: Array<Required<MapTileData>>;
}

export interface SetObjectIdActionPayload {
    objectId: string;
    actorType: GameActorTypeUnion;
}

export interface MapTileData extends TileData {
    x: number;
    y: number;
    zIndex?: number;
}