import {TileData} from "../const/tiles/tiles.ts";
import {RightColumnTabs} from "../RightColumn/RightColumn.const.ts";
import {ModalsUnion} from "../Modals/ModalManager.types.ts";
import {ObjectDetailsModalProps} from "../Modals/ObjectDetailsModal/ObjectDetailsModal.tsx";
import {GameActorTypeUnion} from "../models/game.ts";
import {ActorOnMap, MapToolUnion} from "../Map/Map.types.ts";

export interface AppState {
    mapTilesData: Array<Array<TileData | null>>;
    selectedTile: MapTileData | null;
    objectId: string | null;
    objectStage: number | null;
    rightColumnType: RightColumnTabs;
    activeModel: ModalsUnion | null;
    modalProps: Omit<ObjectDetailsModalProps, 'isOpen'> | null;
    actorType: GameActorTypeUnion;
    mapTool: MapToolUnion | null;
    mapLayers: Array<MapLayer>;
    mapLayer: number;
    actorsOnMap: Array<ActorOnMap>;
    treeHoveredObjectUuid: string | null;
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