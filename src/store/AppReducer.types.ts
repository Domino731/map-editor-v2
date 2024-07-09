import {TileData} from "../const/tiles.ts";

export interface AppState {
    mapTilesData: Array<Array<TileData | null>>;
    selectedTile: MapTileData | null;
}

export interface MapTileData extends TileData {
    x: number;
    y: number;
}