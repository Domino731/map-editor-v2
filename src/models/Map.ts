import {GameActorTypeUnion} from "./game.ts";

export interface MapJsonData {
    defaultTile: MapTileData,
    tiles: MapTileData[][];
    actors: MapActorData[];
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