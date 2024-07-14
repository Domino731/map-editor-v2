import {Vector} from "../types.ts";

export interface GameObjectTexture {
    name: GameObjectTextureNameUnion;
    width: number;
    height: number;
    x: number;
    y: number;
}

export interface GameObjectDrop {
    id: string;
    change: number | number[];
    amount: number | number[];
}

export interface GameObjectActionCollision extends Vector {
    actionType: GameObjectActionsUnion;
}

export interface GameObjectGroundPlace {
    width: number;
    height: number;
    textureXOffset: number;
    textureYOffset: number;
}

export interface GameObjectBase {
    id: string;
    name: string;
    type: GameObjectTypeUnion;
    specs: {
        texture: GameObjectTexture;
        drop: Array<GameObjectDrop>;
        exp: number;
        actionCollisions: Array<GameObjectActionCollision>;
        zIndex: Vector;
        groundPlace: GameObjectGroundPlace;
    }
}

export interface MineObject extends GameObjectBase {
}


// ENUMS
export enum GameObjectType {
    Mine = 'Mine',
    Tree = 'Tree',
    Crop = 'Crop'
}

export type GameObjectTypeUnion = keyof typeof GameObjectType;

export enum GameObjectTextureName {
    Mines = 'Mines',
    Trees = 'Trees',
    Crops = 'Crops'
}

export type GameObjectTextureNameUnion = keyof typeof GameObjectTextureName;


export enum GameObjectActions {
    Cut = "Cut",
    Harvest = "Harvest",
    Water = "Water"
}

export type GameObjectActionsUnion = keyof typeof GameObjectActions;