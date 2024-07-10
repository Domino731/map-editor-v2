import {TileData} from "../const/tiles.ts";
import {RightColumnTabs} from "../RightColumn/RightColumn.const.ts";

export interface AppState {
    mapTilesData: Array<Array<TileData | null>>;
    selectedTile: MapTileData | null;
    objectId: string | null;
    objectStage: number | null;
    rightColumnType: RightColumnTabs;
}

export interface MapTileData extends TileData {
    x: number;
    y: number;
}