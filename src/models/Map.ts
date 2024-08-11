import {GameActorTypeUnion} from "./game.ts";
import {StoreMapTileData} from "../store/AppReducer.types.ts";
import {ActorOnMap} from "../Map/Map.types.ts";

export interface MapJsonData {
    defaultTile: MapTileData,
    tiles: Array<StoreMapTileData>;
    actors: Array<ActorOnMap>;
}

export interface MapTileData {
    x: number;
    y: number;
    spriteId: number;
}

export interface MapActorData {
    x: number;
    y: number;
    id: string;
    actorType: GameActorTypeUnion;
    stage: number | null;
}